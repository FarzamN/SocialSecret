import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Login,
  Register,
  OverBoard,
  OtpScreen,
  ForgetPassword,
  ChangePassword,
} from '../Screens/Authentication';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

const AuthNavigation: FC = () => {
  const {Navigator, Screen} = createNativeStackNavigator();
  const isDark = useSelector((state: RootState) => state.themeMode.defTheme) === 'dark';

  return (
      <Navigator
        initialRouteName={'login'}
        screenOptions={{headerShown: false, animation: 'ios_from_left'}}>
        {[
          {n: 'login', c: Login},
          {n: 'register', c: Register},
          {n: 'OverBoard', c: OverBoard},
          {n: 'otpScreen', c: OtpScreen},
          {n: 'changePassword', c: ChangePassword},
          {n: 'forgetPassword', c: ForgetPassword},
        ].map(({n, c}) => (
          <Screen name={n} component={c} key={n} />
        ))}
      </Navigator>
  );
};

export default AuthNavigation;
