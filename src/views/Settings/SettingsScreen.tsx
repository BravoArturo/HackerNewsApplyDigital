import { View, Text } from 'react-native';
import React from 'react';
import useSettingsViewController from './useSettingsViewController';
import SettingsView from './SettingsView';

const SettingsScreen = () => {
  const props = useSettingsViewController();
  return <SettingsView {...props} />;
};

export default SettingsScreen;
