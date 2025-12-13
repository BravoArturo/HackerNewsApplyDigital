import { ResponseType } from '../../models/types';
import { NotificationSettings } from '@notifee/react-native';
import { AuthorizationStatus } from '@notifee/react-native';
export type AppNavigatorViewModelType = {
  setPermissionAndroidNotificationRequestedStorage: (value: boolean) => void;
  checkNotificationsPermissionsStatus: () => Promise<
    ResponseType<AuthorizationStatus, unknown>
  >;
  requestNotificationPermissions: () => Promise<
    ResponseType<NotificationSettings, unknown>
  >;
};

export type AppNavigatorViewProps = void;
