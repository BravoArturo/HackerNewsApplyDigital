import React from 'react';
import { DeletedHackerNewsViewProps } from './types';
import useDeletedHackerNewsViewModel from './useDeletedHackerNewsViewModel';

function useDeletedHackerNewsViewController(): DeletedHackerNewsViewProps {
  const { deletedHackerNews, hackerNews } = useDeletedHackerNewsViewModel();
  return { deletedHackerNews, hackerNews };
}

export default useDeletedHackerNewsViewController;
