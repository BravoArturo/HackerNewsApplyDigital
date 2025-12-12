import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import { HackerNewItemProps } from './types';

const HackerNewsItem: React.FC<HackerNewItemProps> = ({
  item,
  isFavorite,
  onPressFavorite,
  onSwipe,
  onPressItem,
}) => {
  const { objectID, author, created_at, story_title, title, story_url } = item;
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        height: 350,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
      onPress={() => onPressItem(story_url)}
    >
      <Pressable onPress={() => onPressFavorite(objectID)}>
        <Text>{isFavorite ? 'Remove from favorites' : 'Add to favorites'}</Text>
      </Pressable>
      <Pressable onPress={() => onSwipe(objectID)}>
        <Text>Delete</Text>
      </Pressable>
      <Text>{title ? title : story_title ? story_title : 'Missing title'}</Text>
      <Text>
        {author} - {created_at}
      </Text>
    </TouchableOpacity>
  );
};

export default HackerNewsItem;
