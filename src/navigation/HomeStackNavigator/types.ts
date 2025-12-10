import { RoutesType } from '../types';

export type HomeStackParamList = {
  HackerNews: undefined;
  HackerWebView: undefined;
};

export type HomeStackRoutes = RoutesType<HomeStackParamList>;

export type HomeNavigatorViewProps = {
  routes: HomeStackRoutes;
};
