import React, { useEffect } from 'react';
import { AppNavigatorViewProps } from './types';
import { Alert, Platform } from 'react-native';
import { name } from '../../../package.json';
import useAppNavigatorViewModel from './useAppNavigatorViewModel';
import { AuthorizationStatus } from '@notifee/react-native';
import { sendHackerNewsNotification } from '../../utils/notifications';

function useAppNavigatorViewController(): AppNavigatorViewProps {
  const {
    requestNotificationPermissions,
    checkNotificationsPermissionsStatus,
    setPermissionAndroidNotificationRequestedStorage,
  } = useAppNavigatorViewModel();

  useEffect(() => {
    (async () => {
      const responseNotificationsPermissionsStatus =
        await checkNotificationsPermissionsStatus();
      console.log(' a ver', responseNotificationsPermissionsStatus);

      if (
        responseNotificationsPermissionsStatus.message == 'success' &&
        responseNotificationsPermissionsStatus.response ==
          AuthorizationStatus.NOT_DETERMINED
      ) {
        await askUserForNotificationPermissions();
      }
      await sendHackerNewsNotification('title', 'body');
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
}

export default useAppNavigatorViewController;
