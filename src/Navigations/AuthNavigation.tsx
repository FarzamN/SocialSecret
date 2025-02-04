import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Login,
  Register,
  OverBoard,
  OtpScreen,
  ForgetPassword,
  ChangePassword,
} from '../Screens/Authentication';

const AuthNavigation: FC = () => {
  const {Navigator, Screen} = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={'login'}
        screenOptions={{headerShown: false, animation: 'ios'}}>
        {[
          {n: 'login', c: Login},
          {n: 'register', c: Register},
          {n: 'OverBoard', c: OverBoard},
          {n: 'otpScreen', c: OtpScreen},
          {n: 'changePassword', c: ChangePassword},
          {n: 'ForgetPassword', c: ForgetPassword},
        ].map(({n, c}) => (
          <Screen name={n} component={c} key={n} />
        ))}
      </Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;
