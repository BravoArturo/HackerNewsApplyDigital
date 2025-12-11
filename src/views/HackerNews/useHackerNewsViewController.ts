import React, { useEffect, useState } from 'react';
import { HackerNewsViewProps } from './types';
import useHackerNewsViewModel from './useHackerNewsViewModel';
import { Alert } from 'react-native';

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

  const onPressFavorite = (objectID: string) => {};

  const onSwipe = (objectID: string) => {};

  const onPressItem = (story_url: string | undefined) => {};

  return {
    onRefresh,
    hackerNews,
    isLoading,
    onPressFavorite,
    onSwipe,
    onPressItem,
  };
}

export default useHackerNewsViewController;
