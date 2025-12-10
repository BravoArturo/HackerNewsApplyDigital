import { View, Text } from 'react-native';
import React from 'react';
import { TabNavigatorViewProps } from './types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from './types';
const TabNavigatorView: React.FC<TabNavigatorViewProps> = ({ routes }) => {
  const Tab = createBottomTabNavigator<TabStackParamList>();

  return (
    <Tab.Navigator
      initialRouteName={'HomeStack'}
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      {routes.map(routeConfig => (
        <Tab.Screen key={routeConfig.name} {...routeConfig} />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigatorView;
