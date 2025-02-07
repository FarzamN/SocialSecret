import { setItem } from './../../Utils/storage';
import {Dispatch} from 'redux';
import {setOTP, setUser} from '../slices/authSlice';
import {catchFun} from '../../function';
import {apiUrl} from '../../Utils/Urls';
import {ILoginInput, IauthInput} from '../../Utils/interface';
import {ErrorFunction, LoadFunction, ShakeFunction} from '../../Utils/type';

const {log} = console;

export const loginApi = (
  e: ILoginInput,
  load: LoadFunction,
  error: ErrorFunction,
  shake: ShakeFunction,
) => {
  return async (dispatch: Dispatch) => {
    try {
      load(true);
      const url = `${apiUrl}login`;
      const myData = new FormData();

      myData.append('email', e.email);
      myData.append('password', e.password);

      const response = await fetch(url, {
        method: 'POST',
        body: myData,
      });

      const res = await response.json();
      if (res.status === 'success') {
        dispatch(setUser(res.data));
       setItem('user', res.data);
        load(false);
      } else {
        shake();
        load(false);
        error({visible: true, msg: res.message});
        log(res.message);
      }
    } catch (err) {
      load(false);
      catchFun();
      log('LoginApi error', err);
    }
  };
};

export const authApi = (
  e: IauthInput,
  load: LoadFunction,
  error: ErrorFunction,
) => {
  return async (dispatch: Dispatch) => {
    try {
      load(true);
      const url = `${apiUrl}auth/check-email-Phone`;
      const myData = new FormData();

      myData.append('email', e.email);
      myData.append('phone', e.number);

      const response = await fetch(url, {
        method: 'POST',
        body: myData,
      });

      const res = await response.json();
      if (res.status === 200) {
        dispatch(setOTP(res.otp));
       setItem('user', res.data);
        load(false);
      } else {
        load(false);
        error({visible: true, msg: res.message});
        log(res.message);
      }
    } catch (err) {
      load(false);
      catchFun();
      log('LoginApi error', err);
    }
  };
};
