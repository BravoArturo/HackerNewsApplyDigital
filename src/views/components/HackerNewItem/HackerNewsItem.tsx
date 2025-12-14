import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  Button,
  Dimensions,
} from 'react-native';
import React, { useRef } from 'react';
import { HackerNewItemProps } from './types';
import {
  Gesture,
  GestureDetector,
  GestureType,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { runOnJS } from 'react-native-worklets';

const HackerNewsItem: React.FC<HackerNewItemProps> = ({
  item,
  isFavorite,
  onPressFavorite,
  onSwipe,
  onPressItem,
}) => {
  const { objectID, author, created_at, story_title, title, story_url } = item;
  const screenWidth = Dimensions.get('window').width;
  const panRef = useRef<GestureType | undefined>(undefined);

  const hackerNewTranslateX = useSharedValue(0);

  const transformStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: hackerNewTranslateX.value }],
  }));

  const pan = Gesture.Pan()
    .withRef(panRef)
    .activeOffsetX([-15, 15])
    .failOffsetY([-5, 5])
    .onChange(event => {
      if (event.translationX < 0) {
        if (event.translationX < 0) {
          hackerNewTranslateX.value = event.translationX;
        }
      }
    })
    .onFinalize(() => {
      const shouldDelete = hackerNewTranslateX.value < -screenWidth * 0.3;
      if (shouldDelete) {
        runOnJS(onSwipe)(objectID);
      } else {
        hackerNewTranslateX.value = withSpring(0);
      }
    });

  return (
    <GestureDetector gesture={pan}>
      <View style={styles.itemContainer}>
        <Animated.View style={[styles.animatedViewContainer, transformStyle]}>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'space-around',
              flexDirection: 'column',
            }}
            onPress={() => onPressItem(story_url)}
          >
            <Text style={styles.text}>
              {title ? title : story_title ? story_title : 'Missing title'}
            </Text>
            <View style={styles.buttonsContainer}>
              <Button
                title={
                  isFavorite ? 'Remove from favorites' : 'Add to favorites'
                }
                onPress={() => onPressFavorite(objectID)}
              />
            </View>

            <Text style={styles.text}>
              {author} - {created_at}
            </Text>
          </TouchableOpacity>
        </Animated.View>
        <View style={styles.deleteContainer}>
          <Text style={styles.textDelete}>Delete</Text>
        </View>
      </View>
    </GestureDetector>
  );
};

export default HackerNewsItem;

const styles = StyleSheet.create({
  itemContainer: {
    width: '100%',
    height: 100,
    borderBottomWidth: 1,
    position: 'relative',
  },
  animatedViewContainer: {
    flex: 1,
    borderRightWidth: 1,
    zIndex: 1,
    backgroundColor: 'white',
  },
  deleteContainer: {
    zIndex: 0,
    height: '100%',
    width: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
    backgroundColor: 'red',
    flex: 1,
  },
  text: {
    paddingLeft: 20,
  },
  textDelete: {
    color: 'white',
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
