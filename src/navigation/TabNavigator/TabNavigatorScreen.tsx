import { View, Text } from 'react-native';
import React from 'react';
import useTabNavigatorViewController from './useTabNavigatorViewController';
import TabNavigatorView from './TabNavigatorView';

const TabNavigatorScreen = () => {
  const props = useTabNavigatorViewController();
  return <TabNavigatorView {...props} />;
};

export default TabNavigatorScreen;
