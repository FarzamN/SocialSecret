import React, {useCallback, useState} from 'react';
import {
  Header,
  SettingCard,
  CustomButton,
  ImageBackground,
} from '../../../Components';
import {RootState} from '../../../redux/store';
import {ISetting} from '../../../Utils/interface';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import {setUser} from '../../../redux/slices/authSlice';
import {IconType} from 'react-native-dynamic-vector-icons';
import { Colors } from '../../../Utils/Colors';
import { removeItem } from '../../../Utils/storage';
import responsive from '../../../Utils/responsive';

const SettingScreen = ({navigation}: ISetting) => {
  const {navigate} = navigation;
  const [showDelete, setShowDelete] = useState<Boolean>(false);
  const dispatch = useDispatch();
  const Theme = useSelector((state: RootState) => state.themeMode.defTheme);
  const dark = Theme === 'dark';
  const handleLogout = async () => {
    try {
      removeItem('user');
      dispatch(setUser(null));
    } catch (error) {
      console.error('LogOut failed:', error);
    }
  };
  const data = [
    {
      title: 'Change Theme',
      iconName: 'theme-light-dark',
      onPress: () => navigate('theme'),
      type: IconType.MaterialCommunityIcons,
    },
    {
      iconName: 'pattern',
      title: 'Setup Pattern',
      type: IconType.MaterialIcons,
      onPress: () => navigate('SetupTouchID'),
    },
    {
      iconName: 'newspaper',
      title: 'Term & Condition',
      type: IconType.Ionicons,
      onPress: () => navigate('CheckTouchID'),
    },
    {
      title: 'Delete Account',
      iconName: 'delete-alert',
      onPress: () => setShowDelete(true),
      type: IconType.MaterialCommunityIcons,
    },
  ];

  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          height: responsive.height(60),
          display: 'flex',
          backgroundColor: dark ? Colors.ash : Colors.white,
        },
      });
    }, [dark]),
  );
  return (
    <ImageBackground>
      <Header
        noBack
        isMenu
        double
        label="Settings"
        IconName="settings"
        type={IconType.Ionicons}
      />

      {data.map(item => (
        <SettingCard data={item} key={item.title} />
      ))}
      <CustomButton title="logout" onPress={handleLogout} />
    </ImageBackground>
  );
};

export default SettingScreen;
