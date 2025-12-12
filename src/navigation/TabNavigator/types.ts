import { type NavigatorScreenParams } from '@react-navigation/native';

import { HomeStackParamList } from '../HomeStackNavigator/types';
import { RoutesType } from '../types';

import React from 'react';

export type TabNavigatorViewProps = {
  routes: TabRoutes;
};

export type TabRoutes = RoutesType<TabStackParamList>;

export type TabStackParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
};
