import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import { HackerNewsViewProps } from './types';
import HackerNewsScrollViewList from './components/HackerNewsScrollViewList/HackerNewsScrollViewList';
import ScreenContainer from '../components/ScreenContainer/ScreenContainer';
import Title from '../components/Title/Title';

const HackerNewsView: React.FC<HackerNewsViewProps> = props => {
  const {
    onPressFavoritesHackerNews,
    onPressDeletedHackerNews,
    onPressSettings,
  } = props;

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Title description="Hacker News" />
        <View style={styles.buttonsContainer}>
          <Button title="Favorites" onPress={onPressFavoritesHackerNews} />
          <Button title="Deleted" onPress={onPressDeletedHackerNews} />
          <Button title="Settings" onPress={onPressSettings} />
        </View>
        <HackerNewsScrollViewList {...props} />
      </View>
    </ScreenContainer>
  );
};

export default HackerNewsView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonsContainer: {
    height: '20%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
