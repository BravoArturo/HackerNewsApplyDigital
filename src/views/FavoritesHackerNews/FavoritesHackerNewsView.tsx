import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { FavoritesHackerNewsViewProps } from './types';
import FavoritesHackerNewsScrollViewList from './components/FavoritesHackerNewsScrollViewList/FavoritesHackerNewsScrollViewList';
import ScreenContainer from '../components/ScreenContainer/ScreenContainer';
import Title from '../components/Title/Title';
import NoData from '../components/NoData/NoData';

const FavoritesHackerNewsView: React.FC<
  FavoritesHackerNewsViewProps
> = props => {
  const { favoritesHackerNews, deletedHackerNews } = props;
  return (
    <ScreenContainer>
      <Title description="Favorites" />
      {favoritesHackerNews.length > 0 &&
      !favoritesHackerNews.every(hackerNew =>
        deletedHackerNews.includes(hackerNew),
      ) ? (
        <FavoritesHackerNewsScrollViewList {...props} />
      ) : (
        <NoData />
      )}
    </ScreenContainer>
  );
};

export default FavoritesHackerNewsView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
