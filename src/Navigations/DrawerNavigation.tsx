import {
  ApplyImage,
  EditProfile,
  ProfileSceen,
  SetupTouchID,
  CheckTouchID,
  WallpaperSceen,
} from '../Screens/User';
import React from 'react';
import {Colors} from '../Utils';
import {Font} from '../Utils/font';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import UserNavigation from './UserNavigation';
import DrawerContainer from './DrawerContainer';
import {SettingScreen, Theme} from '../Screens/User';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const DrawerNavigation = () => {
  const {Navigator, Screen} = createDrawerNavigator();
  const theme = useSelector((state: RootState) => state.themeMode.defTheme);
  const dark = theme === 'dark';
  const bg = dark ? Colors.White : Colors.Blue;
  const rbg = dark ? Colors.Blue : Colors.White;
  const Rtint = dark ? Colors.LightYellow : Colors.DarkYellow;

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: bg,
          drawerInactiveTintColor: Rtint,
          drawerActiveBackgroundColor: bg,
          drawerInactiveBackgroundColor: Rtint,
          drawerLabelStyle: {
            color: rbg,
            fontSize: 14,
            fontFamily: Font.font600,
          },
        }}
        initialRouteName="Home"
        drawerContent={props => <DrawerContainer {...props} />}>
        {[
          {
            n: 'Home',
            In: 'home',
            c: UserNavigation,
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
                <Icon name={In} size={20} color={rbg} type={icon} />
              ),
            }}
          />
        ))}
      </Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;

const AllSetting = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}
      initialRouteName="SettingScreen">
      {[
        {n: 'theme', c: Theme},
        {n: 'SettingScreen', c: SettingScreen},
        {n: 'SetupTouchID', c: SetupTouchID},
        {n: 'CheckTouchID', c: CheckTouchID},
      ].map(({n, c}) => (
        <Stack.Screen key={n} name={n} component={c} />
      ))}
    </Stack.Navigator>
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
