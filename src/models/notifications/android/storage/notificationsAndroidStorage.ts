import { createMMKV } from 'react-native-mmkv';

const storage = createMMKV();

const PERMISSION_REQUESTED = 'permissionRequested';
const URL_STORED = 'urlStored';
const ALLOW_NOTIFICATIONS = 'allowNotifications';
const ALLOw_NOTIFICATIONS_IOS = 'allowNotificationsIOS';
const ALLOW_NOTIFICATIONS_ANDROID = 'allowNotificationsAndroid';

export const setPermissionAndroidNotificationRequestedStorage = (
  value: boolean,
) => {
  storage.set(PERMISSION_REQUESTED, value);
};

export const getPermissionAndroidNotificationRequestedStorage = (): boolean => {
  const permissionAndroidNotificationRequestedStorage =
    storage.getBoolean(PERMISSION_REQUESTED);
  return permissionAndroidNotificationRequestedStorage || false;
};

export const setURLStorage = (value: string) => {
  storage.set(URL_STORED, value);
};

export const getURLStorage = (): string | undefined => {
  const urlStored = storage.getString(URL_STORED);
  return urlStored;
};

export const removeURLStorage = () => {
  storage.remove(URL_STORED);
};

export const setAllowNotificationsStore = (value: boolean) => {
  storage.set(ALLOW_NOTIFICATIONS, value);
};

export const getAllowNotificationsStorage = (): boolean => {
  const allowNotificationsStorage = storage.getBoolean(ALLOW_NOTIFICATIONS);
  return allowNotificationsStorage || false;
};

export const setAllowNotificationsIOSStore = (value: boolean) => {
  storage.set(ALLOw_NOTIFICATIONS_IOS, value);
};

export const getAllowNotificationsIOSStorage = (): boolean => {
  const allowNotificationsIOSStorage = storage.getBoolean(
    ALLOw_NOTIFICATIONS_IOS,
  );
  return allowNotificationsIOSStorage || false;
};

export const setAllowNotificationsAndroidStore = (value: boolean) => {
  storage.set(ALLOW_NOTIFICATIONS_ANDROID, value);
};

export const getAllowNotificationsAndroidStorage = (): boolean => {
  const allowNotificationsAndroidStorage = storage.getBoolean(
    ALLOW_NOTIFICATIONS_ANDROID,
  );
  return allowNotificationsAndroidStorage || false;
};
