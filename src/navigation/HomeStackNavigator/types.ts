import { RoutesType } from '../types';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type HomeStackParamList = {
  HackerNews: undefined;
  FavoritesHackerNews: undefined;
  DeletedHackerNews: undefined;
  Settings: undefined;
  HackerWebView: { story_url: string };
};

export type HomeStackRoutes = RoutesType<HomeStackParamList>;

export type HomeNavigatorViewProps = {
  routes: HomeStackRoutes;
};

export type HomeStackNavigationProps<T extends keyof HomeStackParamList> =
  StackNavigationProp<HomeStackParamList, T>;

export type HomeStackRouteProps<T extends keyof HomeStackParamList> = RouteProp<
  HomeStackParamList,
  T
>;
