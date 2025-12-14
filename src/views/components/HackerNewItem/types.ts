import { HackerNew } from '../../../models/news/API/types';

export type HackerNewItemProps = {
  item: HackerNew;
  isFavorite: boolean;
  onPressFavorite: (objectID: string) => void;
  onSwipe: (objectID: string) => void;
  onPressItem: (story_url: string | undefined) => void;
};
