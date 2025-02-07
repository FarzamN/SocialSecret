import {useEffect, useState} from 'react';
import { RootState } from '../redux/store';
import {useColorScheme} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { changeTheme } from '../redux/slices/themeSlice';
import { getItem, setItem } from '../Utils/storage';

const useTheme = () => {
  const systemTheme = useColorScheme();
  const dispatch = useDispatch();
  const currentTheme = useSelector((state: RootState) => state.themeMode.defTheme);
  const [theme, setTheme] = useState<string>('');

  const updateTheme = async (themeLabel: string) => {
    setTheme(themeLabel);
    setItem('mode', themeLabel);

    if (themeLabel === 'Dark Theme') {
      dispatch(changeTheme('dark'));
    } else if (themeLabel === 'Light Theme') {
      dispatch(changeTheme('light'));
    } else {
      dispatch(changeTheme(systemTheme));
    }
  };

  const loadTheme = async () => {
    const storedTheme = getItem('mode');
    const finalTheme = storedTheme ?? 'Device Appearance';
    setTheme(finalTheme);
    dispatch(changeTheme(finalTheme === 'Device Appearance' ? systemTheme : finalTheme.toLowerCase()));
  };

  useEffect(() => {
    loadTheme();
  }, [currentTheme]);

  return {theme, updateTheme};
};

export default useTheme;
