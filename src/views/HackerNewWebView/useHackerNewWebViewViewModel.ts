import { useRoute } from '@react-navigation/native';
import React from 'react';
import { HomeStackRouteProps } from '../../navigation/HomeStackNavigator/types';
import { HackerNewWebViewViewModelType } from './types';

function useHackerNewWebViewViewModel(): HackerNewWebViewViewModelType {
  const route = useRoute<HomeStackRouteProps<'HackerWebView'>>();
  const { params } = route;
  return { params };
}

export default useHackerNewWebViewViewModel;
