import { View, Text } from 'react-native';
import React from 'react';
import HackerNewsView from './HackerNewsView';
import useHackerNewsViewController from './useHackerNewsViewController';

const HackerNewsScreen = () => {
  const props = useHackerNewsViewController();
  return <HackerNewsView {...props} />;
};

export default HackerNewsScreen;
