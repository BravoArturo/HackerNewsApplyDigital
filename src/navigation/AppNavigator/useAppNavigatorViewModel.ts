import React from 'react';
import { ResponseType } from '../../models/types';
import notifee, {
  NotificationSettings,
  AuthorizationStatus,
} from '@notifee/react-native';
import { AppNavigatorViewModelType } from './types';
import { Platform } from 'react-native';
import {
  getPermissionAndroidNotificationRequestedStorage,
  setPermissionAndroidNotificationRequestedStorage,
} from '../../models/notifications/android/storage/notificationsAndroidStorage';
import BackgroundFetch, {
  BackgroundFetchStatus,
} from 'react-native-background-fetch';
import {
  setHackerNewsStorage,
  getHackerNewsStorage,
} from '../../models/news/storage/hackerNewsStorage';
import { getHackerNewsAPI } from '../../models/news/API/news';
import { HackerNewsAPIType } from '../../models/news/API/types';
import { useHackerNewStore } from '../../models/news/store/hackerNewsStore';
import { useShallow } from 'zustand/react/shallow';

function useAppNavigatorViewModel(): AppNavigatorViewModelType {
  const changeHackerNews = useHackerNewStore(
    useShallow(state => state.changeHackerNews),
  );

  const requestNotificationPermissions = async (): Promise<
    ResponseType<NotificationSettings, unknown>
  > => {
    try {
      const response = await notifee.requestPermission();
      return { message: 'success', response };
    } catch (error) {
      return { message: 'error', error };
    }
  };

  const checkNotificationsPermissionsStatus = async (): Promise<
    ResponseType<AuthorizationStatus, unknown>
  > => {
    try {
      const response = await notifee.getNotificationSettings();
      const { authorizationStatus } = response;
      if (Platform.OS == 'ios') {
        return { message: 'success', response: authorizationStatus };
      } else {
        let androidAuthorizationStatus: AuthorizationStatus = -1;
        const permissionAndroidNotificationRequestedStorage =
          getPermissionAndroidNotificationRequestedStorage();
        if (permissionAndroidNotificationRequestedStorage) {
          androidAuthorizationStatus = authorizationStatus;
          return { message: 'success', response: androidAuthorizationStatus };
        }
        return { message: 'success', response: androidAuthorizationStatus };
      }
    } catch (error) {
      return { message: 'error', error };
    }
  };

  const getHackerNews = async (): Promise<
    ResponseType<HackerNewsAPIType, unknown>
  > => {
    try {
      const response = await getHackerNewsAPI();
      return { message: 'success', response };
    } catch (error) {
      return { message: 'error', error };
    }
  };

  const initBackgroundFetch = async (
    onEvent: (taskId: string) => Promise<void>,
  ): Promise<BackgroundFetchStatus> => {
    const onTimeout = async (taskId: string) => {
      BackgroundFetch.finish(taskId);
    };
    const status = await BackgroundFetch.configure(
      { minimumFetchInterval: 15 },
      onEvent,
      onTimeout,
    );

    return status;
  };

  return {
    changeHackerNews,
    getHackerNewsStorage,
    getHackerNews,
    setHackerNewsStorage,
    initBackgroundFetch,
    requestNotificationPermissions,
    checkNotificationsPermissionsStatus,
    setPermissionAndroidNotificationRequestedStorage,
  };
}

export default useAppNavigatorViewModel;
