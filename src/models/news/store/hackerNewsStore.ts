import { create } from 'zustand';
import { hackerNewsStoreType } from './types';
import {
  getDeletedHackerNewsStorage,
  getFavoritesHackerNewsStorage,
  getHackerNewsStorage,
} from '../storage/hackerNewsStorage';

export const useHackerNewStore = create<hackerNewsStoreType>(set => ({
  hackerNews: getHackerNewsStorage(),
  favoritesHackerNews: getFavoritesHackerNewsStorage(),
  deletedHackerNews: getDeletedHackerNewsStorage(),
  changeHackerNews: hackerNews => set(() => ({ hackerNews: hackerNews })),
  changeFavoritesHackerNews: favoritesHackerNews =>
    set(() => ({ favoritesHackerNews: favoritesHackerNews })),
  changeDeletedHackerNews: deletedHackerNews =>
    set(() => ({ deletedHackerNews: deletedHackerNews })),
}));
