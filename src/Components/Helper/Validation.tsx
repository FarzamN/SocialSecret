import {Text} from 'react-native';
import React, {FC} from 'react';
import {ValidationType} from '../../Utils/type';
import {style} from './style';
import {Colors} from '../../Utils';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

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
              color: dark ? Colors.DarkRed : Colors.Red,
            },
          ]}>
          {message}
        </Text>
      )}
    </>
  );
};

export default Validation;
