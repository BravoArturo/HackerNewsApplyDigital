import { ResponseType } from '../../models/types';
import { NotificationSettings } from '@notifee/react-native';
import { AuthorizationStatus } from '@notifee/react-native';
import { HackerNew } from '../../models/news/API/types';
import { HackerNewsAPIType } from '../../models/news/API/types';
import { BackgroundFetchStatus } from 'react-native-background-fetch';
export type AppNavigatorViewModelType = {
  getAllowNotificationsIOSStorage: () => boolean;
  getAllowNotificationsStorage: () => boolean;
  getAllowNotificationsAndroidStorage: () => boolean;
  getHackerNews: () => Promise<ResponseType<HackerNewsAPIType, unknown>>;
  getHackerNewsStorage: () => HackerNew[];
  initBackgroundFetch: (
    onEvent: (taskId: string) => Promise<void>,
  ) => Promise<BackgroundFetchStatus>;
  setPermissionAndroidNotificationRequestedStorage: (value: boolean) => void;
  checkNotificationsPermissionsStatus: () => Promise<
    ResponseType<AuthorizationStatus, unknown>
  >;
  requestNotificationPermissions: () => Promise<
    ResponseType<NotificationSettings, unknown>
  >;
};

export type AppNavigatorViewProps = void;
