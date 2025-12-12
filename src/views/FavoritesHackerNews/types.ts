import { HackerNewsScrollViewListProps } from '../HackerNews/components/HackerNewsScrollViewList/types';
import { HackerNew } from '../../models/news/API/types';
import {} from './components/FavoritesHackerNewsScrollViewList/types';

export type FavoritesHackerNewsViewProps = HackerNewsScrollViewListProps & {};

export type FavoritesHackerNewsViewModelType = {
  setDeletedHackerNewsStorage: (deletedHackerNews: string[]) => void;
  setFavoritesHackerNewsStorage: (favoritesHackerNews: string[]) => void;
  hackerNews: HackerNew[];
  deletedHackerNews: string[];
  favoritesHackerNews: string[];
  changeHackerNews: (value: HackerNew[]) => void;
  changeFavoritesHackerNews: (value: string[]) => void;
  changeDeletedHackerNews: (value: string[]) => void;
  navigateToHackerWebView: (story_url: string) => void;
};
