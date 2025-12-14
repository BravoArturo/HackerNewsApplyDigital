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
    getAllowNotificationsAndroidStorage,
    getAllowNotificationsIOSStorage,
    getAllowNotificationsStorage,
    getHackerNewsStorage,
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
  };

  const onEventBackgroundFetch = async (taskId: string) => {
    const responseHackerNews = await getHackerNews();
    if (responseHackerNews.message == 'success') {
      const { hits } = responseHackerNews.response;
      const hackerNewsStorage = getHackerNewsStorage();
      const isNew = JSON.stringify(hits) === JSON.stringify(hackerNewsStorage);
      if (isNew) {
        const responseNotificationsPermissionsStatus =
          await checkNotificationsPermissionsStatus();
        if (
          responseNotificationsPermissionsStatus.message == 'success' &&
          responseNotificationsPermissionsStatus.response ==
            AuthorizationStatus.AUTHORIZED
        ) {
          const allowNotifications = getAllowNotificationsStorage();
          if (allowNotifications) {
            //I couldn't find a way to tell if the news is about Android or iOS
            // const allowNotificationsIOS = getAllowNotificationsIOSStorage();
            // const allowNotificationsAndroid =
            //   getAllowNotificationsAndroidStorage();
            const { title, url, story_title } = hits[0];
            if (url !== undefined) {
              sendHackerNewsNotification(
                'Hacker New',
                title || story_title || 'No title',
                url,
              );
            }
          }
        }
      }
    }

    BackgroundFetch.finish(taskId);
  };
}

export default useAppNavigatorViewController;
