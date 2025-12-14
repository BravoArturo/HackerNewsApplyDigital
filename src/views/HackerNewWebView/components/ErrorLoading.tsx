import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { ErrorLoadingProps } from './types';
//TODO: mejorar el estilo aca
const ErrorLoading: React.FC<ErrorLoadingProps> = ({ onPressReloadButton }) => {
  return (
    <View style={styles.container}>
      <Text>Error loading web view</Text>
      <Pressable onPress={onPressReloadButton}>
        <Text>Reload</Text>
      </Pressable>
    </View>
  );
};

export default ErrorLoading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
