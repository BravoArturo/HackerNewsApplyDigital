import React from 'react';
import { ResponseAPIType } from '../../models/types';
import { getHackerNewsAPI } from '../../models/news/API/news';
import { HackerNewsViewModelType } from './types';

function useHackerNewsViewModel(): HackerNewsViewModelType {
  const getHackerNews = async (): Promise<
    ResponseAPIType<unknown, unknown>
  > => {
    try {
      const response = await getHackerNewsAPI();
      return { message: 'success', response };
    } catch (error) {
      return { message: 'error', error };
    }
  };

  return { getHackerNews };
}

export default useHackerNewsViewModel;
