import {style} from './style';
import {Colors} from '../../../Utils';
import {useColorScheme} from 'react-native';
import {RootState} from '../../../redux/store';
import {useDispatch, useSelector} from 'react-redux';
import React, {FC, useCallback, useEffect, useState} from 'react';
import {changeTheme} from '../../../redux/slices/themeSlice';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Header, ImageBackground, Radio, Sub} from '../../../Components';
import {useFocusEffect} from '@react-navigation/native';
import {ITheme} from '../../../Utils/interface';
import {GlobalStyle} from '../../../Utils/GlobalStyle';
import {ThemeData} from '../../../Utils/Data';

const Theme = ({navigation}: ITheme) => {
  const dark = useColorScheme();
  const dispatch = useDispatch();
  const isDark =
    useSelector((state: RootState) => state.themeMode.defTheme) === 'dark';
  const [theme, setTheme] = useState('');

  const handleTheme = async (data: any) => {
    const {label} = data;
    setTheme(label);
    await AsyncStorage.setItem('mode', JSON.stringify(label));

    if (label === 'Dark Theme') {
      dispatch(changeTheme('dark'));
    } else if (label === 'Light Theme') {
      dispatch(changeTheme('light'));
    } else if (label === 'Device Apparance') {
      dispatch(changeTheme(dark));
    }
  };

  const modeCheck = async () => {
    const getMode = await AsyncStorage.getItem('mode');
    if (getMode !== null) {
      const cnvrtMode = JSON.parse(getMode);
      const uplodadData =
        typeof cnvrtMode == 'string' ? cnvrtMode : 'Device Apparance';
      setTheme(uplodadData);
    } else {
      setTheme('Device Apparance');
    }
  };

  useEffect(() => {
    modeCheck();
  }, [isDark]);
  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: GlobalStyle.HideBar,
      });
    }, [dark]),
  );
  return (
    <ImageBackground>
      <Header gap label="Theme Change" />
      <Icon
        size={100}
        style={style.IconCenter}
        name={isDark ? 'moon' : 'wb-sunny'}
        color={isDark ? Colors.DarkYellow : Colors.LightYellow}
        type={isDark ? IconType.Ionicons : IconType.MaterialIcons}
      />

      <Sub
        center
        style={[style.SubHeading]}
        text={`Your Theme is set to ${
          theme?.split('')[0]?.toUpperCase() + theme?.slice(1)!
        }`}
      />

      {ThemeData.map((i, ix) => (
        <Radio
          i={ix}
          data={i}
          key={i.label}
          focus={theme == i.label}
          onPress={() => handleTheme(i)}
        />
      ))}
    </ImageBackground>
  );
};

export default Theme;
