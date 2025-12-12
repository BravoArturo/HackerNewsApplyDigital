import { ResponseAPIType } from '../../models/types';
import { HackerNewsAPIType, HackerNew } from '../../models/news/API/types';
import { HackerNewsScrollViewListProps } from './components/HackerNewsScrollViewList/types';

export type HackerNewsViewProps = HackerNewsScrollViewListProps & {
  onPressFavoritesHackerNews: () => void;
  onPressDeletedHackerNews: () => void;
  onPressSettings: () => void;
};

export type HackerNewsViewModelType = {
  getHackerNews: () => Promise<ResponseAPIType<HackerNewsAPIType, unknown>>;
  setHackerNewsStorage: (hackerNews: HackerNew[]) => void;
  setDeletedHackerNewsStorage: (deletedHackerNews: string[]) => void;
  setFavoritesHackerNewsStorage: (favoritesHackerNews: string[]) => void;
  hackerNews: HackerNew[];
  deletedHackerNews: string[];
  favoritesHackerNews: string[];
  changeHackerNews: (value: HackerNew[]) => void;
  changeFavoritesHackerNews: (value: string[]) => void;
  changeDeletedHackerNews: (value: string[]) => void;
  navigateToHackerWebView: (story_url: string) => void;
  navigateToFavoritesHackerNews: () => void;
  navigateToDeletedHackerNews: () => void;
  navigateToSettings: () => void;
};
