import {
  LoadFunction,
  countFunction,
  ErrorFunction,
  ShakeFunction,
} from '../../Utils/type';
import {Dispatch} from 'redux';
import {apiUrl} from '../../Utils/Urls';
import {catchFun, error} from '../../function';
import {setItem} from './../../Utils/storage';
import {setOTP, setUser} from '../slices/authSlice';
import {ILoginInput, IauthInput} from '../../Utils/interface';
import {AuthNavParamList, IRegisteInput} from './../../Utils/interface';

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
      const url = `${apiUrl}auth/login`;
      const myData = new FormData();

      myData.append('email', e.email);
      myData.append('password', e.password);

      const response = await fetch(url, {
        method: 'POST',
        body: myData,
      });

      const res = await response.json();
      if (res.status === 200) {
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
  navigate: (
    screen: keyof AuthNavParamList,
    params?: {data: object; type: string},
  ) => void,
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
        navigate('otpScreen', {data: e, type: 'register'});
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

export const registerApi = (
  e: IRegisteInput,
  load: LoadFunction,
  error: ErrorFunction,
) => {
  return async (dispatch: Dispatch) => {
    try {
      load(true);
      const url = `${apiUrl}auth/register`;
      const myData = new FormData();

      myData.append('name', e.name);
      myData.append('email', e.email);
      myData.append('phone', e.number);
      myData.append('password', e.password);

      const response = await fetch(url, {
        method: 'POST',
        body: myData,
      });

      const res = await response.json();
      if (res.status === 200) {
        dispatch(setUser(res.data));
        setItem('user', res.data);
        load(false);
      } else {
        load(false);
        log(res.message);
        error({visible: true, msg: res.message});
      }
    } catch (err) {
      load(false);
      catchFun();
      log('registerApi error:', err);
    }
  };
};

export const resendOtp = (e: IauthInput, count: countFunction) => {
  return async (dispatch: Dispatch) => {
    try {
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
        count(60);
        dispatch(setOTP(res.otp));
      }
    } catch (err) {
      catchFun();
      log('resendOtp error', err);
    }
  };
};

export const findEmailnPhone = async (
  e: IauthInput,
  type: string,
  nav: (
    screen: keyof AuthNavParamList,
    params?: {data: object; type: string},
  ) => void,
  load: LoadFunction,
) => {
  try {
    load(true);
    const url = `${apiUrl}auth/forget-with-${type}`;
    const myData = new FormData();
    type === 'email'
      ? myData.append('email', e.email)
      : myData.append('phone', e.number);

    const response = await fetch(url, {
      method: 'POST',
      body: myData,
    });

    const res = await response.json();
    load(false);
    if (res.status === 200) {
      nav('otpScreen', {data: res.data, type: 'forget'});
    } else {
      error(res.message)
    }
  } catch (err) {
    load(false);
    catchFun();
    log('findEmail error', err);
  }
};

export const changePasswordAuth = async (
  data: IRegisteInput,
  id: {_id: string},
  nav: (screen: keyof AuthNavParamList) => void,
  load: LoadFunction,
) => {
  try {
    load(true);
    const url = `${apiUrl}auth/change-password-auth/${id._id}`;
    const myData = new FormData();
    myData.append('password', data.password);

    const response = await fetch(url, {
      method: 'POST',
      body: myData,
    });

    const res = await response.json();
    load(false);
    if (res.status === 200) {
      nav('login');
    }
  } catch (err) {
    load(false);
    catchFun();
    log('findEmail error', err);
  }
};
