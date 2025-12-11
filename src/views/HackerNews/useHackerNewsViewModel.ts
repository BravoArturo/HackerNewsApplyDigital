import React from 'react';
import { ResponseAPIType } from '../../models/types';
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
    ResponseAPIType<HackerNewsAPIType, unknown>
  > => {
    try {
      const response = await getHackerNewsAPI();
      return { message: 'success', response };
    } catch (error) {
      return { message: 'error', error };
    }
  };

  return {
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
  };
}

export default useHackerNewsViewModel;
