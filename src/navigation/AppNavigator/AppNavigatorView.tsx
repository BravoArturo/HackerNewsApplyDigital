import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigatorScreen from '../TabNavigator/TabNavigatorScreen';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const AppNavigatorView = () => {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      <View style={[styles.container, safeAreaInsets]}>
        <NavigationContainer>
          <TabNavigatorScreen />
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppNavigatorView;
