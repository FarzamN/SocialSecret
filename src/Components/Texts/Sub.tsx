import React, {FC} from 'react';
import {Text} from 'react-native';
import styles from './style';
import {HeadingType} from '../../Utils/type';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {Colors} from '../../Utils';
const Sub: FC<HeadingType> = props => {
  const {text, style, center, marginTop} = props;
  const checkTheme =
    useSelector((state: RootState) => state.themeMode.defTheme) === 'dark';
  return (
    <Text
      style={[
        styles.Sub,
        {
          textAlign: center ? 'center' : 'left',
          marginTop: marginTop,
          color: checkTheme ? Colors.White : Colors.Black,
        },
        style,
      ]}>
      {text}
    </Text>
  );
};

export default Sub;
