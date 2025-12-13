import React, { useEffect, useState } from 'react';
import { HackerNewsViewProps } from './types';
import useHackerNewsViewModel from './useHackerNewsViewModel';
import { Alert } from 'react-native';
//TODO: sort by date

function useHackerNewsViewController(): HackerNewsViewProps {
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
  } = useHackerNewsViewModel();

  const handleChangeIsLoading = (value: boolean) => {
    setIsLoading(value);
  };

  const onRefresh = async () => {
    handleChangeIsLoading(true);
    const responseHackerNews = await getHackerNews();
    if (responseHackerNews.message == 'success') {
      const { hits } = responseHackerNews.response;
      setHackerNewsStorage(hits);
      changeHackerNews(hits);
    } else {
      Alert.alert('Try again.');
    }
    handleChangeIsLoading(false);
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
    navigateToFavoritesHackerNews();
  };

  const onPressDeletedHackerNews = () => {
    navigateToDeletedHackerNews();
  };

  const onPressSettings = () => {
    navigateToSettings();
  };

  return {
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
