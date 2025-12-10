import React from 'react';
import { HomeNavigatorViewProps, HomeStackRoutes } from './types';
import HackerNewsScreen from '../../views/HackerNews/HackerNewsScreen';

function useHomeNavigatorViewController(): HomeNavigatorViewProps {
  const routes: HomeStackRoutes = [
    {
      name: 'HackerNews',
      component: HackerNewsScreen,
    },
    // {
    //   name: 'HackerWebView',
    //   component: Picture,
    // },
  ];
  return { routes };
}

export default useHomeNavigatorViewController;
