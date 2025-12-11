import { View, Text } from 'react-native';
import React from 'react';
import { HackerNewItemProps } from './types';

const HackerNewsItem: React.FC<HackerNewItemProps> = ({
  item,
  onPressFavorite,
  onSwipe,
  onPressItem,
}) => {
  const { objectID, author, created_at, story_title, title, story_url } = item;
  return (
    <View>
      <Text>{story_title ? story_title : title ? title : 'Missing title'}</Text>
      <Text>
        {author} - {created_at}
      </Text>
    </View>
  );
};

export default HackerNewsItem;
