import {
  ApplyImage,
  EditProfile,
  ProfileSceen,
  SetupTouchID,
  CheckTouchID,
  WallpaperSceen,
} from '../Screens/User';
import React from 'react';
import {Font} from '../Utils/font';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import tabNavigation from './tabNavigation';
import DrawerContainer from './DrawerContainer';
import {SettingScreen, Theme} from '../Screens/User';
import { darkTheme, lightTheme,Colors } from '../Utils/Colors';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import responsive, { BORDER_RADIUS, FONT_SIZES } from '../Utils/responsive';

const DrawerNavigation = () => {
  const {Navigator, Screen} = createDrawerNavigator();
  
  const dark = useSelector((state: RootState) => state.themeMode.defTheme)=== 'dark';
  const bg = dark ? Colors.white : Colors.blue;
  const rbg = dark ? Colors.blue : Colors.white;
  const Rtint = dark ? lightTheme.yellow : darkTheme.yellow;

  return (
      <Navigator
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: bg,
          drawerInactiveTintColor: Rtint,
          drawerActiveBackgroundColor: bg,
          drawerInactiveBackgroundColor: Rtint,
          drawerLabelStyle: {
            color: rbg,
            fontSize: FONT_SIZES.SMALL,
            fontFamily: Font.font600,
          },
          drawerItemStyle:{marginVertical:responsive.space(2), borderRadius:BORDER_RADIUS.MEDIUM}
        }}
        initialRouteName="Home"
        drawerContent={props => <DrawerContainer {...props} />}>
        {[
          {
            n: 'Home',
            In: 'home',
            c: tabNavigation,
            icon: IconType.Ionicons,
          },
          {
            n: 'Profile',
            c: AllProfile,
            In: 'user-alt',
            icon: IconType.FontAwesome5,
          },
          {
            In: 'heart',
            c: AllSetting,
            n: 'Favourite',
            icon: IconType.AntDesign,
          },
          {
            In: 'images',
            n: 'Wallpaper',
            c: AllWallpaper,
            icon: IconType.Ionicons,
          },
          {
            n: 'Setting',
            c: AllSetting,
            In: 'settings-sharp',
            icon: IconType.Ionicons,
          },
        ].map(({n, c, In, icon}) => (
          <Screen
            key={n}
            name={n}
            component={c}
            options={{
              drawerIcon: () => (
                <Icon name={In} size={FONT_SIZES.BODY} color={rbg} type={icon} />
              ),
            }}
          />
        ))}
      </Navigator>
  );
};

export default DrawerNavigation;

const AllSetting = () => {
  const {Navigator,Screen} = createNativeStackNavigator();
  return (
    <Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}
      initialRouteName="SettingScreen">
      {[
        {n: 'theme', c: Theme},
        {n: 'SettingScreen', c: SettingScreen},
        {n: 'SetupTouchID', c: SetupTouchID},
        {n: 'CheckTouchID', c: CheckTouchID},
      ].map(({n, c}) => (
        <Screen key={n} name={n} component={c} />
      ))}
    </Navigator>
  );
};

const AllWallpaper = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}
      initialRouteName="wallpapera">
      {[
        {n: 'wallpapera', c: WallpaperSceen},
        {n: 'ApplyImage', c: ApplyImage},
      ].map(({n, c}) => (
        <Stack.Screen key={n} name={n} component={c} />
      ))}
    </Stack.Navigator>
  );
};

const AllProfile = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}
      initialRouteName="profileSceen">
      {[
        {n: 'profileSceen', c: ProfileSceen},
        {n: 'editProfile', c: EditProfile},
      ].map(({n, c}) => (
        <Stack.Screen key={n} name={n} component={c} />
      ))}
    </Stack.Navigator>
  );
};
