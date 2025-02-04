import {Text} from 'react-native';
import React, {FC} from 'react';
import styles from './style';
import {HeadingType} from '../../Utils/type';
import {Colors} from '../../Utils';
import {RootState} from '../../redux/store';
import {useSelector} from 'react-redux';

const Heading: FC<HeadingType> = props => {
  const {text, style, center, marginTop} = props;
  const checkTheme =
    useSelector((state: RootState) => state.themeMode.defTheme) === 'dark';
  return (
    <Text
      style={[
        styles.Heading,
        {
          marginTop: marginTop,
          textAlign: center ? 'center' : 'left',
          color: checkTheme ? Colors.White : Colors.Black,
        },
        style,
      ]}>
      {text}
    </Text>
  );
};

export default Heading;
