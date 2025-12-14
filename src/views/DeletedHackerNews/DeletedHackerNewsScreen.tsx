import { View, Text } from 'react-native';
import React from 'react';
import DeletedHackerNewsView from './DeletedHackerNewsView';
import useDeletedHackerNewsViewController from './useDeletedHackerNewsViewController';

const DeletedHackerNewsScreen = () => {
  const props = useDeletedHackerNewsViewController();
  return <DeletedHackerNewsView {...props} />;
};

export default DeletedHackerNewsScreen;
