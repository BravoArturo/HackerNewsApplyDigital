import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useHackerNewStore } from '../../models/news/store/hackerNewsStore';
import { useShallow } from 'zustand/react/shallow';
import { HomeStackNavigationProps } from '../../navigation/HomeStackNavigator/types';
import { FavoritesHackerNewsViewModelType } from './types';
import {
  setDeletedHackerNewsStorage,
  setFavoritesHackerNewsStorage,
} from '../../models/news/storage/hackerNewsStorage';

function useFavoritesHackerNewsViewModel(): FavoritesHackerNewsViewModelType {
  const navigation =
    useNavigation<HomeStackNavigationProps<'FavoritesHackerNews'>>();

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

  const navigateToHackerWebView = (story_url: string) => {
    navigation.navigate('HackerWebView', { story_url });
  };

  return {
    changeDeletedHackerNews,
    changeFavoritesHackerNews,
    changeHackerNews,
    deletedHackerNews,
    favoritesHackerNews,
    hackerNews,
    navigateToHackerWebView,
    setDeletedHackerNewsStorage,
    setFavoritesHackerNewsStorage,
  };
}

export default useFavoritesHackerNewsViewModel;
