import { HackerNew } from '../API/types';
export type hackerNewsStoreType = {
  hackerNews: HackerNew[];
  favoritesHackerNews: string[];
  deletedHackerNews: string[];
  changeHackerNews: (value: HackerNew[]) => void;
  changeFavoritesHackerNews: (value: string[]) => void;
  changeDeletedHackerNews: (value: string[]) => void;
};
