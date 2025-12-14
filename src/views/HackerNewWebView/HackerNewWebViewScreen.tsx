import { View, Text } from 'react-native';
import React from 'react';
import useHackerNewWebViewViewController from './useHackerNewWebViewViewController';
import HackerNewWebViewView from './HackerNewWebViewView';

const HackerNewWebViewScreen = () => {
  const props = useHackerNewWebViewViewController();
  return <HackerNewWebViewView {...props} />;
};

export default HackerNewWebViewScreen;
