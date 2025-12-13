import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { PropsWithChildren } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const ScreenContainer: React.FC<PropsWithChildren> = ({ children }) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const canGoBack = navigation.canGoBack();
  const { goBack } = navigation;
  return (
    <View style={[styles.container, insets]}>
      {canGoBack == true && (
        <Pressable onPress={goBack}>
          <Text style={styles.goBackText}>Go back</Text>
        </Pressable>
      )}
      {children}
    </View>
  );
};

export default ScreenContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  goBackText: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
