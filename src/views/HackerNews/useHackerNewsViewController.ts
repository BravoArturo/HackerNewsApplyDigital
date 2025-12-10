import React, { useEffect } from 'react';
import { HackerNewsViewProps } from './types';
import useHackerNewsViewModel from './useHackerNewsViewModel';

function useHackerNewsViewController(): HackerNewsViewProps {
  const { getHackerNews } = useHackerNewsViewModel();

  useEffect(() => {
    (async () => {
      const responseHackerNews = await getHackerNews();
      console.log('esta es mi response', responseHackerNews);
    })();
  }, []);

  return {};
}

export default useHackerNewsViewController;
