import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const NoData = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textDescription}>There is no news on the list</Text>
    </View>
  );
};

export default NoData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 1,
    alignItems: 'center',
  },
  textDescription: {
    color: 'red',
    fontSize: 20,
  },
});
