/**
 * @format
 */
import 'react-native-gesture-handler';
import { Alert, AppRegistry, Platform } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import notifee, { EventType } from '@notifee/react-native';
import { setURLStorage } from './src/models/notifications/android/storage/notificationsAndroidStorage';

notifee.onBackgroundEvent(async ({ type, detail }) => {
  const { notification } = detail;
  if (type === EventType.PRESS) {
    if (notification?.data !== undefined && notification.id !== undefined) {
      if ('url' in notification.data) {
        const urlHackerNew = notification.data.url;
        if (urlHackerNew) {
          setURLStorage(urlHackerNew);
        }
        await notifee.cancelNotification(notification.id);
      }
    }
  }
});

AppRegistry.registerComponent(appName, () => App);
