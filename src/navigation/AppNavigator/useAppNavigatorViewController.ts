import React, { useEffect, useRef } from 'react';
import { AppNavigatorViewProps } from './types';
import { Alert, AppState, Platform, AppStateStatus } from 'react-native';
import { name } from '../../../package.json';
import useAppNavigatorViewModel from './useAppNavigatorViewModel';
import { AuthorizationStatus } from '@notifee/react-native';
import { sendHackerNewsNotification } from '../../utils/notifications';
import BackgroundFetch from 'react-native-background-fetch';
function useAppNavigatorViewController(): AppNavigatorViewProps {
  const {
    initBackgroundFetch,
    requestNotificationPermissions,
    checkNotificationsPermissionsStatus,
    setPermissionAndroidNotificationRequestedStorage,
    getHackerNews,
    setHackerNewsStorage,
  } = useAppNavigatorViewModel();
  const appState = useRef<AppStateStatus>(AppState.currentState);

  useEffect(() => {
    (async () => {
      const responseNotificationsPermissionsStatus =
        await checkNotificationsPermissionsStatus();
      if (
        responseNotificationsPermissionsStatus.message == 'success' &&
        responseNotificationsPermissionsStatus.response ==
          AuthorizationStatus.NOT_DETERMINED
      ) {
        await askUserForNotificationPermissions();
      }
      await activeBackgroudFetch();
    })();
  }, []);

  const askUserForNotificationPermissions = async () => {
    Alert.alert(
      'Notification Permissions',
      'Please grant ' + name + ' permission to send notifications',
      [
        {
          text: 'Accept',
          onPress: async () => await onPressAcceptToNotification(),
        },
      ],
      { cancelable: false },
    );
  };

  const onPressAcceptToNotification = async () => {
    await requestNotificationPermissions();
    if (Platform.OS == 'android') {
      setPermissionAndroidNotificationRequestedStorage(true);
    }
  };

  const activeBackgroudFetch = async () => {
    const status = await initBackgroundFetch(onEventBackgroundFetch);
    console.log('este es el status', status);
  };

  const onEventBackgroundFetch = async (taskId: string) => {
    const responseHackerNews = await getHackerNews();
    if (responseHackerNews.message == 'success') {
      const { hits } = responseHackerNews.response;
      setHackerNewsStorage(hits);
    }
    const responseNotificationsPermissionsStatus =
      await checkNotificationsPermissionsStatus();
    if (
      responseNotificationsPermissionsStatus.message == 'success' &&
      responseNotificationsPermissionsStatus.response ==
        AuthorizationStatus.AUTHORIZED
    ) {
      //TODO: validar ademas el storage del muchacho
      sendHackerNewsNotification(taskId, Date.now().toString(), 'test');
    }
    BackgroundFetch.finish(taskId);
  };
}

export default useAppNavigatorViewController;
