import { createMMKV } from 'react-native-mmkv';

const storage = createMMKV();

const PERMISSION_REQUESTED = 'permissionRequested';

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
