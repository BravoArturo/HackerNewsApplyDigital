import React from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import { HackerNewsScrollViewListProps } from './types';
import HackerNewsItem from '../HackerNewItem/HackerNewsItem';

const HackerNewsScrollViewList: React.FC<HackerNewsScrollViewListProps> = ({
  isLoading,
  onRefresh,
  hackerNews,
  onPressFavorite,
  onSwipe,
  onPressItem,
}) => {
  return (
    <ScrollView
      style={{ borderWidth: 1, height: 300 }}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
      }
    >
      {hackerNews.map(item => {
        return (
          <HackerNewsItem
            onPressItem={onPressItem}
            item={item}
            key={item.objectID}
            onPressFavorite={onPressFavorite}
            onSwipe={onSwipe}
          />
        );
      })}
    </ScrollView>
  );
};

export default HackerNewsScrollViewList;
