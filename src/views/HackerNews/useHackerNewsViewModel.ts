import React from 'react';
import { ResponseType } from '../../models/types';
import { getHackerNewsAPI } from '../../models/news/API/news';
import { HackerNewsViewModelType } from './types';
import { HackerNewsAPIType } from '../../models/news/API/types';
import { HomeStackNavigationProps } from '../../navigation/HomeStackNavigator/types';
import { useNavigation } from '@react-navigation/native';
import { useHackerNewStore } from '../../models/news/store/hackerNewsStore';
import { useShallow } from 'zustand/react/shallow';
import {
  setHackerNewsStorage,
  setDeletedHackerNewsStorage,
  setFavoritesHackerNewsStorage,
} from '../../models/news/storage/hackerNewsStorage';
import {
  getURLStorage,
  removeURLStorage,
} from '../../models/notifications/android/storage/notificationsAndroidStorage';

function useHackerNewsViewModel(): HackerNewsViewModelType {
  const navigation = useNavigation<HomeStackNavigationProps<'HackerNews'>>();

  const hackerNews = useHackerNewStore(useShallow(state => state.hackerNews));

  const deletedHackerNews = useHackerNewStore(
    useShallow(state => state.deletedHackerNews),
  );

  const favoritesHackerNews = useHackerNewStore(
    useShallow(state => state.favoritesHackerNews),
  );

  const changeHackerNews = useHackerNewStore(
    useShallow(state => state.changeHackerNews),
  );

  const changeFavoritesHackerNews = useHackerNewStore(
    useShallow(state => state.changeFavoritesHackerNews),
  );

  const changeDeletedHackerNews = useHackerNewStore(
    useShallow(state => state.changeDeletedHackerNews),
  );

  const getHackerNews = async (): Promise<
    ResponseType<HackerNewsAPIType, unknown>
  > => {
    try {
      const response = await getHackerNewsAPI();
      return { message: 'success', response };
    } catch (error) {
      return { message: 'error', error };
    }
  };

  const navigateToHackerWebView = (story_url: string) => {
    navigation.navigate('HackerWebView', { story_url });
  };

  const navigateToFavoritesHackerNews = () => {
    navigation.navigate('FavoritesHackerNews');
  };

  const navigateToDeletedHackerNews = () => {
    navigation.navigate('DeletedHackerNews');
  };

  const navigateToSettings = () => {
    navigation.navigate('Settings');
  };

  return {
    getURLStorage,
    removeURLStorage,
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
  };
}

export default useHackerNewsViewModel;
