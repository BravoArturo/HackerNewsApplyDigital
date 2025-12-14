import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { DeletedHackerNewsScrollViewListProps } from './types';
import DeletedHackerNewItem from '../DeletedHackerNewItem/DeletedHackerNewItem';

const DeletedHackerNewsScrollViewList: React.FC<
  DeletedHackerNewsScrollViewListProps
> = ({ deletedHackerNews, hackerNews }) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {hackerNews.map(item => {
        const { objectID } = item;
        return (
          deletedHackerNews.includes(objectID) && (
            <DeletedHackerNewItem item={item} key={item.objectID} />
          )
        );
      })}
    </ScrollView>
  );
};

export default DeletedHackerNewsScrollViewList;

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
