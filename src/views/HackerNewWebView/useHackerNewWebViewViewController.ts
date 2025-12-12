import React, { useState, useRef } from 'react';
import useHackerNewWebViewViewModel from './useHackerNewWebViewViewModel';
import { HackerNewWebViewProps } from './types';
import { WebView } from 'react-native-webview';

function useHackerNewWebViewViewController(): HackerNewWebViewProps {
  const { params } = useHackerNewWebViewViewModel();
  const [url, setUrl] = useState(params.story_url);
  const webViewRef = useRef<WebView>(null);

  const onPressReloadButton = () => {
    if (webViewRef.current) {
      webViewRef.current.reload();
    }
  };

  return { url, onPressReloadButton, webViewRef };
}

export default useHackerNewWebViewViewController;
