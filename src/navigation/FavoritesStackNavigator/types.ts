import { RoutesType } from '../types';

export type FavoritesStackParamList = {
  Favorites: undefined;
};

export type FavoritesStackRoutes = RoutesType<FavoritesStackParamList>;

export type FavoritesNavigatorViewProps = {
  routes: FavoritesStackRoutes;
};
