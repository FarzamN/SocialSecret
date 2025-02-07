import {Alert} from 'react-native';
import {useSelector} from 'react-redux';
import React, {FC, useState} from 'react';
import {RootState} from '../../../../redux/store';
import GesturePassword from 'react-native-gesture-password';
import {CustomButton, Header, ImageBackground} from '../../../../Components';
import {IconType} from 'react-native-dynamic-vector-icons';
import { Colors, darkTheme } from '../../../../Utils/Colors';
import { getItem } from '../../../../Utils/storage';
import responsive from '../../../../Utils/responsive';

const CheckTouchID: FC = () => {
  const Theme = useSelector((state: RootState) => state.themeMode.defTheme);
  const dark = Theme === 'dark';
  const [enteredPattern, setEnteredPattern] = useState('');

  const verifyPattern = async () => {
    const storedPattern = getItem('pattern');
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
        rightColor={darkTheme.yellow}
        style={{backgroundColor: Colors.Non}}
        onEnd={pattern => setEnteredPattern(pattern)}
        normalColor={dark ? Colors.primary : Colors.white}
      />
      <CustomButton
        title="Unlock"
        onPress={verifyPattern}
        style={{marginBottom: responsive.space(10)}}
      />
    </ImageBackground>
  );
};

export default CheckTouchID;
