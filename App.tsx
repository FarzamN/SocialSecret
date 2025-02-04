import {RootState} from './src/redux/store';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from './src/redux/slices/authSlice';
import {onDisplayNotification} from './src/function';
import React, {FC, useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {changeTheme} from './src/redux/slices/themeSlice';
import AuthNavigation from './src/Navigations/AuthNavigation';
import AnimatedSplash from 'react-native-animated-splash-screen';
import {useColorScheme} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerNavigation from './src/Navigations/DrawerNavigation';

const App: FC = () => {
  const mode = useColorScheme();
  const [load, setLoad] = useState<boolean>(false);
  const {getItem} = AsyncStorage;
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const dark =
    useSelector((state: RootState) => state.themeMode.defTheme) === 'dark';

  const checkLoginState = async () => {
    const data = await getItem('user');
    if (data != null) {
      const userData = JSON.parse(data);
      dispatch(setUser(userData));
    }
  };

  // !-- Notification work start
  /*
useEffect(() => {
  const unsubscribe = message().onMessage(async remoteMessage => {
    onDisplayNotification(remoteMessage);
  });
  
  return unsubscribe;
}, []);
*/
  // !-- Notification work end

  // !-- Theme work Start

  const modeCheck = async () => {
    const getMode = await AsyncStorage.getItem('mode');
    console.log('get mode app.tsx', getMode);
    if (getMode === 'Dark Theme') {
      dispatch(changeTheme('dark'));
      console.log('Dark Theme in app.tsx');
    } else if (getMode === 'Light Theme') {
      dispatch(changeTheme('light'));
      console.log('Light Theme in app.tsx');
    } else {
      dispatch(changeTheme(mode));
      console.log('device Theme in app.tsx');
    }
  };

  useEffect(() => {
    modeCheck();
  }, [mode]);

  // !-- Theme work end

  useEffect(() => {
    checkLoginState();
    setTimeout(() => setLoad(true), 3000);
    setTimeout(() => SplashScreen.hide(), 300);
  }, []);

  return (
    <AnimatedSplash
      isLoaded={load}
      backgroundColor={dark ? '#00040F' : '#F1F1F1'}
      logoHeight={150}
      logoWidth={150}
      logoImage={require('./src/Assets/Images/logo.png')}>
      {user == null ? <AuthNavigation /> : <DrawerNavigation />}
    </AnimatedSplash>
  );
};

export default App;
