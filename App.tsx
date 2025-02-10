import {RootState} from './src/redux/store';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from './src/redux/slices/authSlice';
import React, {FC, useEffect, useState} from 'react';
import {changeTheme} from './src/redux/slices/themeSlice';
import AuthNavigation from './src/Navigations/AuthNavigation';
import AnimatedSplash from 'react-native-animated-splash-screen';
import {useColorScheme} from 'react-native';
import DrawerNavigation from './src/Navigations/DrawerNavigation';
import {getItem} from './src/Utils/storage';
import {NavigationContainer} from '@react-navigation/native';
import responsive from './src/Utils/responsive';

const App: FC = () => {
  const mode = useColorScheme();
  const [load, setLoad] = useState<boolean>(false);
  const dispatch = useDispatch();
  const {user} = useSelector((state: RootState) => state.auth);
  const dark =
    useSelector((state: RootState) => state.themeMode.defTheme) === 'dark';

  const checkLoginState = () => {
    const data = getItem('user');
    if (data) {
      dispatch(setUser(data));
    }
  };

  // !-- Notification work start
  /*
useEffect(() => { const unsubscribe = message().onMessage(async remoteMessage => {
    onDisplayNotification(remoteMessage);
  });
  
  return unsubscribe;
}, []);
*/
  // !-- Notification work end

  // !-- Theme work Start
  const modeCheck = () => {
    const getMode = getItem('mode');
    if (getMode === 'Dark Theme') {
      dispatch(changeTheme('dark'));
    } else if (getMode === 'Light Theme') {
      dispatch(changeTheme('light'));
    } else {
      dispatch(changeTheme(mode));
    }
  };

  useEffect(() => {
    modeCheck();
  }, [mode]);

  // !-- Theme work end

  useEffect(() => {
    checkLoginState();
    setTimeout(() => setLoad(true), 3000);
  }, []);

  return (
    <AnimatedSplash
      isLoaded={load}
      backgroundColor={dark ? '#00040F' : '#F1F1F1'}
      logoHeight={responsive.height(150)}
      logoWidth={responsive.width(150)}
      logoImage={require('./src/Assets/Images/logo.png')}>
      <NavigationContainer>
        {user == null ? <AuthNavigation /> : <DrawerNavigation />}
      </NavigationContainer>
    </AnimatedSplash>
  );
};

export default App;
