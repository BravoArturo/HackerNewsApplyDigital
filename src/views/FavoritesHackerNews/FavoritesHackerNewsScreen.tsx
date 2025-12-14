import { View, Text } from 'react-native';
import React from 'react';
import useFavoritesHackerNewsViewController from './useFavoritesHackerNewsViewController';
import FavoritesHackerNewsView from './FavoritesHackerNewsView';

const FavoritesHackerNewsScreen = () => {
  const props = useFavoritesHackerNewsViewController();
  return <FavoritesHackerNewsView {...props} />;
};

export default FavoritesHackerNewsScreen;
