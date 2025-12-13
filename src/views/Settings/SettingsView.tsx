import { View, Text } from 'react-native';
import React from 'react';
import { SettingsViewProps } from './types';
import ScreenContainer from '../components/ScreenContainer/ScreenContainer';
import Title from '../components/Title/Title';

const SettingsView: React.FC<SettingsViewProps> = () => {
  return (
    <ScreenContainer>
      <Title description="Settings" />
    </ScreenContainer>
  );
};

export default SettingsView;
