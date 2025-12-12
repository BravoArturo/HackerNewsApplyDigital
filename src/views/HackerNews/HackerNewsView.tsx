import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import { HackerNewsViewProps } from './types';
import HackerNewsScrollViewList from './components/HackerNewsScrollViewList/HackerNewsScrollViewList';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const HackerNewsView: React.FC<HackerNewsViewProps> = props => {
  const {
    onPressFavoritesHackerNews,
    onPressDeletedHackerNews,
    onPressSettings,
  } = props;
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, insets]}>
      <Text>Hacker News</Text>
      <Button title="Favorites" onPress={onPressFavoritesHackerNews} />
      <Button title="Deleted" onPress={onPressDeletedHackerNews} />
      <Button title="Settings" onPress={onPressSettings} />
      <HackerNewsScrollViewList {...props} />
    </View>
  );
};

export default HackerNewsView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
