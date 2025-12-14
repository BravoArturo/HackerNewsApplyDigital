import React from 'react';
import { DeletedHackerNewsViewModelType } from './types';
import { useHackerNewStore } from '../../models/news/store/hackerNewsStore';
import { useShallow } from 'zustand/react/shallow';

function useDeletedHackerNewsViewModel(): DeletedHackerNewsViewModelType {
  const hackerNews = useHackerNewStore(useShallow(state => state.hackerNews));

  const deletedHackerNews = useHackerNewStore(
    useShallow(state => state.deletedHackerNews),
  );
  return { hackerNews, deletedHackerNews };
}

export default useDeletedHackerNewsViewModel;
