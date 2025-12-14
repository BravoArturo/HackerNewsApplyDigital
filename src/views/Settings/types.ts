export type SettingsViewProps = {
  notificationsValue: boolean;
  notificationsAndroidValue: boolean;
  notificationsIOSValue: boolean;
  onChangeNotificationsValue: (value: boolean) => void;
  onChangeNotificationsAndroidValue: (value: boolean) => void;
  onChangeNotificationsIOSValue: (value: boolean) => void;
};

export type SettingsViewModelType = {
  getAllowNotificationsAndroidStorage: () => boolean;
  getAllowNotificationsIOSStorage: () => boolean;
  getAllowNotificationsStorage: () => boolean;
  setAllowNotificationsAndroidStore: (value: boolean) => void;
  setAllowNotificationsIOSStore: (value: boolean) => void;
  setAllowNotificationsStore: (value: boolean) => void;
};
