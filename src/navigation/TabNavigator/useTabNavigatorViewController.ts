import React from 'react';

import HomeNavigatorScreen from '../HomeStackNavigator/HomeNavigatorScreen';
import FavoritesNavigationScreen from '../FavoritesStackNavigator/FavoritesNavigationScreen';
import { TabNavigatorViewProps, TabRoutes } from './types';

function useTabNavigatorViewController(): TabNavigatorViewProps {
  const routes: TabRoutes = [
    {
      name: 'HomeStack',
      component: HomeNavigatorScreen,
    },
    {
      name: 'FavoritesStack',
      component: FavoritesNavigationScreen,
    },
  ];

  return { routes };
}

export default useTabNavigatorViewController;
