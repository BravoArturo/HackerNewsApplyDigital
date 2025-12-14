import React, { useEffect, useRef, useState } from 'react';
import { HackerNewsViewProps } from './types';
import useHackerNewsViewModel from './useHackerNewsViewModel';
import { Alert, AppState, AppStateStatus } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { sendHackerNewsNotification } from '../../utils/notifications';
import notifee, { EventType } from '@notifee/react-native';

function useHackerNewsViewController(): HackerNewsViewProps {
  const {
    getHackerNews,
    changeDeletedHackerNews,
    changeFavoritesHackerNews,
    changeHackerNews,
    deletedHackerNews,
    favoritesHackerNews,
    hackerNews,
    setDeletedHackerNewsStorage,
    setFavoritesHackerNewsStorage,
    setHackerNewsStorage,
    navigateToHackerWebView,
    navigateToDeletedHackerNews,
    navigateToFavoritesHackerNews,
    navigateToSettings,
    getURLStorage,
    removeURLStorage,
  } = useHackerNewsViewModel();
  const appState = useRef<AppStateStatus>(AppState.currentState);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const scrollViewRef = useRef<ScrollView>(undefined);

  useEffect(() => {
    (async () => {
      await manageHackerNewsData();
      const subscription = AppState.addEventListener(
        'change',
        async nextAppState => {
          if (
            appState.current.match(/inactive|background/) &&
            nextAppState === 'active'
          ) {
            const URLStore = getURLStorage();
            console.log('che que onda', URLStore);

            if (URLStore !== undefined) {
              navigateToHackerWebView(URLStore);
              removeURLStorage();
            }
          }
          appState.current = nextAppState;
        },
      );
      return () => {
        subscription.remove();
      };
    })();
  }, []);

  useEffect(() => {
    return notifee.onForegroundEvent(async ({ type, detail }) => {
      if (type == EventType.PRESS) {
        const { notification } = detail;
        if (notification?.data !== undefined && notification.id !== undefined) {
          if ('url' in notification.data) {
            const urlHackerNew = notification.data.url as string;
            if (urlHackerNew) {
              navigateToHackerWebView(urlHackerNew);
            }
            await notifee.cancelNotification(notification.id);
          }
        }
      }
    });
  }, []);

  const handleChangeIsLoading = (value: boolean) => {
    setIsLoading(value);
  };

  const manageHackerNewsData = async () => {
    handleChangeIsLoading(true);
    const responseHackerNews = await getHackerNews();
    if (responseHackerNews.message == 'success') {
      const { hits } = responseHackerNews.response;
      setHackerNewsStorage(hits);
      changeHackerNews(hits);
    }
    handleChangeIsLoading(false);
  };

  const onRefresh = async () => {
    await manageHackerNewsData();
  };

  const onPressFavorite = (objectID: string) => {
    let newFavoritesHackerNews: string[];

    if (favoritesHackerNews.includes(objectID)) {
      newFavoritesHackerNews = favoritesHackerNews.filter(
        item => item !== objectID,
      );
    } else {
      newFavoritesHackerNews = [...favoritesHackerNews, objectID];
    }
    setFavoritesHackerNewsStorage(newFavoritesHackerNews);
    changeFavoritesHackerNews(newFavoritesHackerNews);
  };

  const onSwipe = (objectID: string) => {
    const newDeletedHackerNews = [...deletedHackerNews, objectID];
    setDeletedHackerNewsStorage(newDeletedHackerNews);
    changeDeletedHackerNews(newDeletedHackerNews);
  };

  const onPressItem = (story_url: string | undefined) => {
    if (story_url) {
      navigateToHackerWebView(story_url);
    } else {
      Alert.alert('News without url');
    }
  };

  const onPressFavoritesHackerNews = () => {
    sendHackerNewsNotification('test', 'test', 'a ver che');
    //navigateToFavoritesHackerNews();
  };

  const onPressDeletedHackerNews = () => {
    navigateToDeletedHackerNews();
  };

  const onPressSettings = () => {
    navigateToSettings();
  };

  return {
    scrollViewRef,
    onRefresh,
    hackerNews,
    isLoading,
    onPressFavorite,
    onSwipe,
    onPressItem,
    deletedHackerNews,
    favoritesHackerNews,
    onPressDeletedHackerNews,
    onPressFavoritesHackerNews,
    onPressSettings,
  };
}

export default useHackerNewsViewController;
