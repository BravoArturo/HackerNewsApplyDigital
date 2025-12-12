import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { FavoritesHackerNewsViewProps } from './types';
import FavoritesHackerNewsScrollViewList from './components/FavoritesHackerNewsScrollViewList/FavoritesHackerNewsScrollViewList';
const FavoritesHackerNewsView: React.FC<
  FavoritesHackerNewsViewProps
> = props => {
  return (
    <View>
      <Text>Favorites Hacker News</Text>
      <FavoritesHackerNewsScrollViewList {...props} />
    </View>
  );
};

export default FavoritesHackerNewsView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
