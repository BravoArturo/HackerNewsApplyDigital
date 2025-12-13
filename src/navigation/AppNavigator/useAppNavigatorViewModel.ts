import React from 'react';
import { ResponseType } from '../../models/types';
import notifee, {
  NotificationSettings,
  AuthorizationStatus,
} from '@notifee/react-native';
import { AppNavigatorViewModelType } from './types';
import { PermissionsAndroid, Platform } from 'react-native';
import {
  getPermissionAndroidNotificationRequestedStorage,
  setPermissionAndroidNotificationRequestedStorage,
} from '../../models/notifications/android/storage/notificationsAndroidStorage';

function useAppNavigatorViewModel(): AppNavigatorViewModelType {
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

  return {
    requestNotificationPermissions,
    checkNotificationsPermissionsStatus,
    setPermissionAndroidNotificationRequestedStorage,
  };
}

export default useAppNavigatorViewModel;
