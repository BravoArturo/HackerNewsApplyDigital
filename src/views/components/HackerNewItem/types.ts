import { HackerNew } from '../../../models/news/API/types';
export type HackerNewItemProps = {
  item: HackerNew;
  onPressFavorite: (objectID: string) => void;
  onSwipe: (objectID: string) => void;
  onPressItem: (story_url: string | undefined) => void;
};
