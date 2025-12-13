import { HackerNew } from '../../../models/news/API/types';
import { ScrollView } from 'react-native-gesture-handler';

export type HackerNewItemProps = {
  scrollViewRef: React.RefObject<ScrollView | undefined>;
  item: HackerNew;
  isFavorite: boolean;
  onPressFavorite: (objectID: string) => void;
  onSwipe: (objectID: string) => void;
  onPressItem: (story_url: string | undefined) => void;
};
