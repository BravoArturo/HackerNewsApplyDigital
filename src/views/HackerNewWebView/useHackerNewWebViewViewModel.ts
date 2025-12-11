import { useRoute } from '@react-navigation/native';
import React from 'react';
import { HomeStackRouteProps } from '../../navigation/HomeStackNavigator/types';

function useHackerNewWebViewViewModel() {
  const route = useRoute<HomeStackRouteProps<'HackerWebView'>>();
  const { params } = route;
  return {};
}

export default useHackerNewWebViewViewModel;
