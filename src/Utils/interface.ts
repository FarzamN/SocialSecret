import {ComponentType} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

export interface Route<T extends object = {}> {
  key: string;
  name: string;
  params?: T;
}

// !@---> UserNavigation Interface
export interface ScreenConfig {
  name: string;
  component: ComponentType<any>;
}

export interface NavigatorConfig {
  initialRouteName: string;
  screens: ScreenConfig[];
}

export interface KeyboardProps {
  visible?: boolean;
  onDone: () => void;
  onDelete: () => void;
  onPressKey: (value: number) => void;
}

export type AuthNavParamList = {
  login: undefined;
  OverBoard: undefined;
  register: undefined;
  ForgetPassword: undefined;
  otpScreen: {data: string | object; type: string};
  changePassword: undefined;
};

export type UserNavParamList = {
  theme: undefined;
  chatInbox: undefined;
  wallpaper: undefined;
  ApplyImage: undefined;
  SetupTouchID: undefined;
  CheckTouchID: undefined;
  SingerProfile: {item: object};
};

export interface ILogin {
  navigation: StackNavigationProp<AuthNavParamList, 'login'>;
}

export interface ILoginInput {
  email: string;
  password: string;
}
export interface IauthInput {
  email: string;
  number: string;
}

export interface InOverBoard {
  navigation: StackNavigationProp<AuthNavParamList, 'OverBoard'>;
}
export interface InRegister {
  navigation: StackNavigationProp<AuthNavParamList, 'register'>;
}
export interface InForgetPassword {
  navigation: StackNavigationProp<AuthNavParamList, 'ForgetPassword'>;
}
export interface InOtpScreen {
  route: any;
  navigation: StackNavigationProp<AuthNavParamList, 'otpScreen'>;
}

// ! User Side interface

export interface ISetting {
  navigation: StackNavigationProp<UserNavParamList>;
}

export interface IFeed {
  navigation: StackNavigationProp<UserNavParamList, 'theme'>;
}

export interface IBlog {
  navigation: StackNavigationProp<UserNavParamList, 'theme'>;
}

export interface IMusic {
  navigation: StackNavigationProp<UserNavParamList>;
}

export interface ITheme {
  navigation: StackNavigationProp<UserNavParamList, 'theme'>;
}

export interface IWallpaper {
  route: any;
  navigation: StackNavigationProp<UserNavParamList>;
}
export interface IApplyImage {
  route: any;
  navigation: StackNavigationProp<UserNavParamList>;
}

export interface IChatInbox {
  navigation: StackNavigationProp<UserNavParamList, 'chatInbox'>;
}
