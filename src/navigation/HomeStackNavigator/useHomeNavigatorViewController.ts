import React from 'react';
import { HomeNavigatorViewProps, HomeStackRoutes } from './types';
import HackerNewsScreen from '../../views/HackerNews/HackerNewsScreen';
import FavoritesHackerNewsScreen from '../../views/FavoritesHackerNews/FavoritesHackerNewsScreen';
import DeletedHackerNewsScreen from '../../views/DeletedHackerNews/DeletedHackerNewsScreen';
import SettingsScreen from '../../views/Settings/SettingsScreen';
import HackerNewWebViewScreen from '../../views/HackerNewWebView/HackerNewWebViewScreen';

function useHomeNavigatorViewController(): HomeNavigatorViewProps {
  const routes: HomeStackRoutes = [
    {
      name: 'HackerNews',
      component: HackerNewsScreen,
    },
    {
      name: 'FavoritesHackerNews',
      component: FavoritesHackerNewsScreen,
    },
    {
      name: 'DeletedHackerNews',
      component: DeletedHackerNewsScreen,
    },
    {
      name: 'Settings',
      component: SettingsScreen,
    },
    {
      name: 'HackerWebView',
      component: HackerNewWebViewScreen,
    },
  ];
  return { routes };
}

export default useHomeNavigatorViewController;
