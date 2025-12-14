import React from 'react';
import { SettingsViewModelType } from './types';
import {
  getAllowNotificationsAndroidStorage,
  getAllowNotificationsIOSStorage,
  getAllowNotificationsStorage,
  setAllowNotificationsAndroidStore,
  setAllowNotificationsIOSStore,
  setAllowNotificationsStore,
} from '../../models/notifications/android/storage/notificationsAndroidStorage';

function useSettingsViewModel(): SettingsViewModelType {
  return {
    getAllowNotificationsAndroidStorage,
    getAllowNotificationsIOSStorage,
    getAllowNotificationsStorage,
    setAllowNotificationsAndroidStore,
    setAllowNotificationsIOSStore,
    setAllowNotificationsStore,
  };
}

export default useSettingsViewModel;
