import {EmailRegix} from './Urls';
import { Platform} from 'react-native';



export const OS = Platform.OS;
export const iOS = Platform.OS === 'ios';
export const android = Platform.OS === 'android';

export const minLength = {
  value: 8,
  message: 'minimum length is 8',
};

export const maxLength = {
  value: 16,
  message: 'maximum length is 16',
};

export const emailPattern = {
  value: EmailRegix,
  message: 'Email is not valid',
};

export const required = (type: any) => {
  return `${type} is Required`;
};

