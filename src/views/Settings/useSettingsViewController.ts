import React, { useState } from 'react';
import { SettingsViewProps } from './types';
import useSettingsViewModel from './useSettingsViewModel';

function useSettingsViewController(): SettingsViewProps {
  const {
    getAllowNotificationsAndroidStorage,
    getAllowNotificationsIOSStorage,
    getAllowNotificationsStorage,
    setAllowNotificationsAndroidStore,
    setAllowNotificationsIOSStore,
    setAllowNotificationsStore,
  } = useSettingsViewModel();
  const [notificationsValue, setNotificationsValue] = useState<boolean>(
    getAllowNotificationsStorage(),
  );
  const [notificationsAndroidValue, setNotificationsAndroidValue] =
    useState<boolean>(getAllowNotificationsAndroidStorage());
  const [notificationsIOSValue, setNotificationsIOSValue] = useState<boolean>(
    getAllowNotificationsIOSStorage(),
  );

  const handleChangeNotificationsValue = (value: boolean) => {
    setNotificationsValue(value);
  };

  const handleChangeNotificationsAndroidValue = (value: boolean) => {
    setNotificationsAndroidValue(value);
  };

  const handleChangeNotificationsIOSValue = (value: boolean) => {
    setNotificationsIOSValue(value);
  };

  const onChangeNotificationsValue = (value: boolean) => {
    setAllowNotificationsStore(value);
    handleChangeNotificationsValue(value);
    if (!value) {
      onChangeNotificationsAndroidValue(value);
      onChangeNotificationsIOSValue(value);
    }
  };
  const onChangeNotificationsAndroidValue = (value: boolean) => {
    setAllowNotificationsAndroidStore(value);
    handleChangeNotificationsAndroidValue(value);
  };

  const onChangeNotificationsIOSValue = (value: boolean) => {
    setAllowNotificationsIOSStore(value);
    handleChangeNotificationsIOSValue(value);
  };

  return {
    notificationsAndroidValue,
    notificationsIOSValue,
    notificationsValue,
    onChangeNotificationsAndroidValue,
    onChangeNotificationsIOSValue,
    onChangeNotificationsValue,
  };
}

export default useSettingsViewController;
