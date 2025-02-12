import { MMKV } from 'react-native-mmkv';
export const storage = new MMKV();


export const reduxStorage = {
  setItem: (key: string, value: string) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key: string) => {
    const value = storage.getString(key);
    return Promise.resolve(value || null);
  },
  removeItem: (key: string) => {
    storage.delete(key);
    return Promise.resolve();
  },
};



export const setItem = (key: string, value: any) => {
  storage.set(key, JSON.stringify(value));
};

export const getItem = (key: string) => {
  const value = storage.getString(key);
  return value ? JSON.parse(value) : null;
};

export const removeItem = (key: string) => storage.delete(key);