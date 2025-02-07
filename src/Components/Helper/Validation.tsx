import {Text} from 'react-native';
import React, {FC} from 'react';
import {ValidationType} from '../../Utils/type';
import {style} from './style';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import { darkTheme, lightTheme } from '../../Utils/Colors';

const Validation: FC<ValidationType> = props => {
  const {isError, message} = props;
  const dark =
    useSelector((state: RootState) => state.themeMode.defTheme) === 'dark';
  return (
    <>
      {isError && (
        <Text
          style={[
            style.helperText,
            {
              color: dark ? darkTheme.error : lightTheme.error,
            },
          ]}>
          {message}
        </Text>
      )}
    </>
  );
};

export default Validation;
