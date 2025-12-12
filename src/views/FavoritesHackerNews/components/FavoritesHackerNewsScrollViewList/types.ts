import { HackerNew } from '../../../../models/news/API/types';

export type FavoritesHackerNewsScrollViewListProps = {
  onPressFavorite: (objectID: string) => void;
  onSwipe: (objectID: string) => void;
  onPressItem: (story_url: string | undefined) => void;
  hackerNews: HackerNew[];
  deletedHackerNews: string[];
  favoritesHackerNews: string[];
};
