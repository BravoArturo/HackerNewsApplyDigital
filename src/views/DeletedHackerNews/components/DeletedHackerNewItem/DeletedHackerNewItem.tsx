import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { DeletedHackerNewItemProps } from './types';

const DeletedHackerNewItem: React.FC<DeletedHackerNewItemProps> = ({
  item,
}) => {
  const { title, story_title, author, created_at } = item;
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.text}>
        {title ? title : story_title ? story_title : 'Missing title'}
      </Text>
      <Text style={styles.text}>
        {author} - {created_at}
      </Text>
    </View>
  );
};

export default DeletedHackerNewItem;

const styles = StyleSheet.create({
  itemContainer: {
    width: '100%',
    height: 100,
    justifyContent: 'space-around',
    borderBottomWidth: 1,
  },
  text: {
    paddingLeft: 20,
  },
});
