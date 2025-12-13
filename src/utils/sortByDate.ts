import { HackerNew } from '../models/news/API/types';

export const sortByDate = (hackerNews: HackerNew[]): HackerNew[] => {
  return [...hackerNews].sort((a, b) => b.created_at_i - a.created_at_i);
};
