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
  forgetPassword: {type: string};
  otpScreen: {data: object; type: string};
  changePassword: {id: string};
};

export type UserNavParamList = {
  theme: undefined;
  chatInbox: undefined;
  wallpaper: undefined;
  ApplyImage: undefined;
  SetupTouchID: undefined;
  CheckTouchID: undefined;
  SingerProfile: {item: object};
  chatScreen: {item: object};
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
  password: string;
}

export interface IRegisteInput {
  name: string;
  email: string;
  number: string;
  password: string;
  c_password: string;
}

export interface InOverBoard {
  navigation: StackNavigationProp<AuthNavParamList, 'OverBoard'>;
}
export interface InRegister {
  navigation: StackNavigationProp<AuthNavParamList, 'register'>;
}
export interface InForgetPassword {
  route: {params: {type: string}};
  navigation: StackNavigationProp<AuthNavParamList, 'forgetPassword'>;
}

export interface InChangePassword {
  route: {params: {id: {_id: string}}};
  navigation: StackNavigationProp<AuthNavParamList, 'login'>;
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

export interface ichatScreen {
  route: any;
  navigation: StackNavigationProp<UserNavParamList, 'chatScreen'>;
}
