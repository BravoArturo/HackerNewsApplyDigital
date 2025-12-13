import React from 'react';
import {
  View,
  Text,
  RefreshControl,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { HackerNewsScrollViewListProps } from './types';
import HackerNewsItem from '../../../components/HackerNewItem/HackerNewsItem';

const HackerNewsScrollViewList: React.FC<HackerNewsScrollViewListProps> = ({
  isLoading = false,
  onRefresh,
  hackerNews,
  deletedHackerNews,
  favoritesHackerNews,
  onPressFavorite,
  onSwipe,
  onPressItem,
  scrollViewRef,
}) => {
  return (
    <ScrollView
      ref={scrollViewRef as React.Ref<ScrollView>}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
      }
    >
      {hackerNews.map(item => {
        const { objectID } = item;
        return (
          !deletedHackerNews.includes(objectID) && (
            <HackerNewsItem
              scrollViewRef={scrollViewRef}
              isFavorite={favoritesHackerNews.includes(objectID)}
              onPressItem={onPressItem}
              item={item}
              key={objectID}
              onPressFavorite={onPressFavorite}
              onSwipe={onSwipe}
            />
          )
        );
      })}
    </ScrollView>
  );
};

export default HackerNewsScrollViewList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    borderWidth: 1,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 100,
  },
});
