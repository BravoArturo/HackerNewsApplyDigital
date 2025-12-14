import { HackerNew } from '../../../../models/news/API/types';
import { ScrollView } from 'react-native-gesture-handler';

export type FavoritesHackerNewsScrollViewListProps = {
  scrollViewRef: React.RefObject<ScrollView | undefined>;
  onPressFavorite: (objectID: string) => void;
  onSwipe: (objectID: string) => void;
  onPressItem: (story_url: string | undefined) => void;
  hackerNews: HackerNew[];
  deletedHackerNews: string[];
  favoritesHackerNews: string[];
};
