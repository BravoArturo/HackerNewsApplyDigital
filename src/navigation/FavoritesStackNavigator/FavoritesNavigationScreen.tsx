import { View, Text } from 'react-native';
import React from 'react';
import useFavoritesNavigatorViewController from './useFavoritesNavigatorViewController';
import FavoritesNavigatorView from './FavoritesNavigatorView';

const FavoritesNavigationScreen = () => {
  const props = useFavoritesNavigatorViewController();
  return <FavoritesNavigatorView {...props} />;
};

export default FavoritesNavigationScreen;
