import { ResponseAPIType } from '../../models/types';

export type HackerNewsViewProps = {};

export type HackerNewsViewModelType = {
  getHackerNews: () => Promise<ResponseAPIType<unknown, unknown>>;
};
