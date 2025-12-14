import { createMMKV } from 'react-native-mmkv';
import { HackerNew } from '../API/types';
const storage = createMMKV();

const HACKER_NEWS_STORAGE = 'hackerNewsStorage';
const FAVORITES_HACKER_NEWS_STORAGE = 'favoritesHackerNewsStorage';
const DELETED_HACKER_NEWS_STORAGE = 'deletedHackerNewsStorage';

export const setHackerNewsStorage = (hackerNews: HackerNew[]) => {
  const hackerNewsStringified = JSON.stringify(hackerNews);
  storage.set(HACKER_NEWS_STORAGE, hackerNewsStringified);
};

export const getHackerNewsStorage = (): HackerNew[] => {
  const hackerNewsStorage = storage.getString(HACKER_NEWS_STORAGE);
  if (hackerNewsStorage !== undefined) {
    const hackerNewsStorageParsed = JSON.parse(
      hackerNewsStorage,
    ) as HackerNew[];
    return hackerNewsStorageParsed;
  } else {
    return [];
  }
};

export const setFavoritesHackerNewsStorage = (
  favoritesHackerNews: string[],
) => {
  const favoritesHackerNewsStringified = JSON.stringify(favoritesHackerNews);
  storage.set(FAVORITES_HACKER_NEWS_STORAGE, favoritesHackerNewsStringified);
};

export const getFavoritesHackerNewsStorage = (): string[] => {
  const favoritesHackerNewsStorage = storage.getString(
    FAVORITES_HACKER_NEWS_STORAGE,
  );
  if (favoritesHackerNewsStorage !== undefined) {
    const favoritesStorageParsed = JSON.parse(
      favoritesHackerNewsStorage,
    ) as string[];
    return favoritesStorageParsed;
  } else {
    return [];
  }
};

export const setDeletedHackerNewsStorage = (deletedHackerNews: string[]) => {
  const deletedHackerNewsStringified = JSON.stringify(deletedHackerNews);
  storage.set(DELETED_HACKER_NEWS_STORAGE, deletedHackerNewsStringified);
};

export const getDeletedHackerNewsStorage = (): string[] => {
  const deletedHackerNewsStorage = storage.getString(
    DELETED_HACKER_NEWS_STORAGE,
  );
  if (deletedHackerNewsStorage !== undefined) {
    const deletedHackerNewsParsed = JSON.parse(
      deletedHackerNewsStorage,
    ) as string[];
    return deletedHackerNewsParsed;
  } else {
    return [];
  }
};
