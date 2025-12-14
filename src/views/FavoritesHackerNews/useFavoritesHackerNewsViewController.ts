import React, { useRef } from 'react';
import { FavoritesHackerNewsViewProps } from './types';
import useFavoritesHackerNewsViewModel from './useFavoritesHackerNewsViewModel';
import { Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

function useFavoritesHackerNewsViewController(): FavoritesHackerNewsViewProps {
  const {
    changeDeletedHackerNews,
    changeFavoritesHackerNews,
    changeHackerNews,
    deletedHackerNews,
    favoritesHackerNews,
    hackerNews,
    navigateToHackerWebView,
    setDeletedHackerNewsStorage,
    setFavoritesHackerNewsStorage,
  } = useFavoritesHackerNewsViewModel();
  const scrollViewRef = useRef<ScrollView>(undefined);

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

  return {
    deletedHackerNews,
    favoritesHackerNews,
    hackerNews,
    onPressFavorite,
    onPressItem,
    onSwipe,
    scrollViewRef,
  };
}

export default useFavoritesHackerNewsViewController;
