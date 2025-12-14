import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { TitleProps } from './types';

const Title: React.FC<TitleProps> = ({ description }) => {
  return <Text style={styles.title}>{description}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
  },
});
