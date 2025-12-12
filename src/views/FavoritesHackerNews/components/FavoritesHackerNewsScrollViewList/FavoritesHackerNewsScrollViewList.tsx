import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { FavoritesHackerNewsScrollViewListProps } from './types';
import HackerNewsItem from '../../../components/HackerNewItem/HackerNewsItem';

const FavoritesHackerNewsScrollViewList: React.FC<
  FavoritesHackerNewsScrollViewListProps
> = ({
  deletedHackerNews,
  favoritesHackerNews,
  hackerNews,
  onPressFavorite,
  onPressItem,
  onSwipe,
}) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {hackerNews.map(item => {
        const { objectID } = item;
        return (
          !deletedHackerNews.includes(objectID) &&
          favoritesHackerNews.includes(objectID) && (
            <HackerNewsItem
              isFavorite
              onPressItem={onPressItem}
              item={item}
              key={item.objectID}
              onPressFavorite={onPressFavorite}
              onSwipe={onSwipe}
            />
          )
        );
      })}
    </ScrollView>
  );
};

export default FavoritesHackerNewsScrollViewList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 100,
  },
});
