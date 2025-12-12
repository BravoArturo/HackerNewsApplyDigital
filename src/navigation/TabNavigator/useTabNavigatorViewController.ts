import React from 'react';

import HomeNavigatorScreen from '../HomeStackNavigator/HomeNavigatorScreen';
import { TabNavigatorViewProps, TabRoutes } from './types';

function useTabNavigatorViewController(): TabNavigatorViewProps {
  const routes: TabRoutes = [
    {
      name: 'HomeStack',
      component: HomeNavigatorScreen,
    },
  ];

  return { routes };
}

export default useTabNavigatorViewController;
