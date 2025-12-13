import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import React from 'react';
import { HackerNewWebViewProps } from './types';
import { WebView } from 'react-native-webview';
import ErrorLoading from './components/ErrorLoading';
import ScreenContainer from '../components/ScreenContainer/ScreenContainer';

const HackerNewWebViewView: React.FC<HackerNewWebViewProps> = ({
  url,
  webViewRef,
  onPressReloadButton,
}) => {
  return (
    <ScreenContainer>
      <WebView
        ref={webViewRef}
        startInLoadingState={true}
        renderError={() => (
          <ErrorLoading onPressReloadButton={onPressReloadButton} />
        )}
        renderLoading={() => (
          <View style={styles.loadingContainer}>
            <ActivityIndicator animating={true} size={'large'} />
          </View>
        )}
        source={{ uri: url }}
        style={styles.webview}
      />
    </ScreenContainer>
  );
};

export default HackerNewWebViewView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  conatinerLoading: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  webview: {
    borderWidth: 1,
    borderColor: 'red',
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
