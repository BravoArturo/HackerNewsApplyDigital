import { ScrollView } from 'react-native';
import { HackerNew } from '../../../../models/news/API/types';

export type HackerNewsScrollViewListProps = {
  onPressFavorite: (objectID: string) => void;
  onSwipe: (objectID: string) => void;
  onPressItem: (story_url: string | undefined) => void;
  onRefresh: () => Promise<void>;
  hackerNews: HackerNew[];
  deletedHackerNews: string[];
  favoritesHackerNews: string[];
  isLoading: boolean;
};
