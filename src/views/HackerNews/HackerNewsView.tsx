import { View, Text } from 'react-native';
import React from 'react';
import { HackerNewsViewProps } from './types';
import HackerNewsScrollViewList from '../components/HackerNewsScrollViewList/HackerNewsScrollViewList';

const HackerNewsView: React.FC<HackerNewsViewProps> = props => {
  return (
    <View>
      <HackerNewsScrollViewList {...props} />
    </View>
  );
};

export default HackerNewsView;
