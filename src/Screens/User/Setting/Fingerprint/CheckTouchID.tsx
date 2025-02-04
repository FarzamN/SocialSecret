import {Alert} from 'react-native';
import {useSelector} from 'react-redux';
import {Colors} from '../../../../Utils';
import React, {FC, useState} from 'react';
import {RootState} from '../../../../redux/store';
import GesturePassword from 'react-native-gesture-password';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CustomButton, Header, ImageBackground} from '../../../../Components';
import {IconType} from 'react-native-dynamic-vector-icons';

const CheckTouchID: FC = () => {
  const Theme = useSelector((state: RootState) => state.themeMode.defTheme);
  const dark = Theme === 'dark';
  const [enteredPattern, setEnteredPattern] = useState('');

  const verifyPattern = async () => {
    const storedPattern = await AsyncStorage.getItem('pattern');
    console.log({storedPattern});
    if (enteredPattern === storedPattern) {
      Alert.alert('Success', 'Pattern unlocked!');
      setEnteredPattern('');
    } else {
      Alert.alert('Error', 'Incorrect pattern!');
      setEnteredPattern('');
    }
  };

  return (
    <ImageBackground>
      <Header
        label="Check Pattern"
        noBack
        IconName="user"
        type={IconType.AntDesign}
      />
      <GesturePassword
        allowCross
        wrongColor="red"
        rightColor={Colors.DarkYellow}
        style={{backgroundColor: Colors.Non}}
        onEnd={pattern => setEnteredPattern(pattern)}
        normalColor={dark ? Colors.Sky : Colors.White}
      />
      <CustomButton
        title="Unlock"
        onPress={verifyPattern}
        style={{marginBottom: 10}}
      />
    </ImageBackground>
  );
};

export default CheckTouchID;
