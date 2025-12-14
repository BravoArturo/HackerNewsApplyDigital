import { View, Text, StyleSheet, Switch } from 'react-native';
import React from 'react';
import { SettingsViewProps } from './types';
import ScreenContainer from '../components/ScreenContainer/ScreenContainer';
import Title from '../components/Title/Title';

const SettingsView: React.FC<SettingsViewProps> = ({
  notificationsAndroidValue,
  notificationsIOSValue,
  notificationsValue,
  onChangeNotificationsAndroidValue,
  onChangeNotificationsIOSValue,
  onChangeNotificationsValue,
}) => {
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Title description="Settings" />
        <View style={styles.switchContainer}>
          <Text>Allow notifications</Text>
          <Switch
            value={notificationsValue}
            onChange={() => {
              onChangeNotificationsValue(!notificationsValue);
            }}
          />
        </View>
        <View style={styles.switchContainer}>
          <Text>Allow Android notifications</Text>
          <Switch
            disabled={!notificationsValue}
            value={notificationsAndroidValue}
            onChange={() => {
              onChangeNotificationsAndroidValue(!notificationsAndroidValue);
            }}
          />
        </View>
        <View style={styles.switchContainer}>
          <Text>Allow iOS notifications</Text>
          <Switch
            disabled={!notificationsValue}
            value={notificationsIOSValue}
            onChange={() => {
              onChangeNotificationsIOSValue(!notificationsIOSValue);
            }}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default SettingsView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
    height: 40,
  },
  switchLabel: {
    fontSize: 30,
  },
});
