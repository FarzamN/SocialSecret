import {Alert} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import GesturePassword from 'react-native-gesture-password';
import { getItem, setItem } from '../../../../Utils/storage';
import { Colors, darkTheme } from '../../../../Utils/Colors';
import {Header, ImageBackground, CustomButton} from '../../../../Components';
import responsive from '../../../../Utils/responsive';

const SetupTouchID: FC = ({navigation}) => {
  const {goBack} = navigation;
  const [storedPattern, setStoredPattern] = useState('');
  const [alreadyHave, setAlreadyHave] = useState('');

  const savePattern = async (pattern: string) => {
    await setItem('pattern', pattern);
    setStoredPattern(pattern);
    Alert.alert(`${pattern} pattern is saved successfuly`);
    goBack();
  };

  useEffect(() => {
    const getPattern = async () => {
      try {
        const already = await getItem('pattern');
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
        rightColor={darkTheme.yellow}
        style={{backgroundColor: Colors.Non}}
        onEnd={pattern => setStoredPattern(pattern)}
      />
      <CustomButton
        style={{marginBottom: responsive.space(10)}}
        onPress={() => savePattern(storedPattern)}
        title={`${alreadyHave ? 'Edit' : 'Save'} Pattern`}
      />
    </ImageBackground>
  );
};

export default SetupTouchID;
