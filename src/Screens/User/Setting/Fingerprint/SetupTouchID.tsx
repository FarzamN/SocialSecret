import React, {FC, useEffect, useState} from 'react';
import {Header, ImageBackground, CustomButton} from '../../../../Components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GesturePassword from 'react-native-gesture-password';
import {Colors} from '../../../../Utils';
import {Alert} from 'react-native';

const SetupTouchID: FC = ({navigation}) => {
  const {goBack} = navigation;
  const [storedPattern, setStoredPattern] = useState('');
  const [alreadyHave, setAlreadyHave] = useState('');

  const savePattern = async (pattern: string) => {
    await AsyncStorage.setItem('pattern', pattern);
    setStoredPattern(pattern);
    Alert.alert(`${pattern} pattern is saved successfuly`);
    goBack();
  };

  useEffect(() => {
    const getPattern = async () => {
      try {
        const already = await AsyncStorage.getItem('pattern');
        setAlreadyHave(already);
      } catch (error) {
        console.error('Error getting pattern:', error);
      }
    };

    getPattern();
  }, []);

  return (
    <ImageBackground>
      <Header gap label={`${alreadyHave ? 'Edit' : 'Setup'} Pattern`} />
      <GesturePassword
        allowCross={false}
        rightColor={Colors.DarkYellow}
        style={{backgroundColor: Colors.Non}}
        onEnd={pattern => setStoredPattern(pattern)}
      />
      <CustomButton
        style={{marginBottom: 10}}
        onPress={() => savePattern(storedPattern)}
        title={`${alreadyHave ? 'Edit' : 'Save'} Pattern`}
      />
    </ImageBackground>
  );
};

export default SetupTouchID;
