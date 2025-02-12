import styles from './style';
import React, {FC} from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import { Colors } from '../../Utils/Colors';
import {HeadingType} from '../../Utils/type';

const Heading: FC<HeadingType> = props => {
  const {text, style, center, marginTop,numberOfLines} = props;
  const checkTheme =
    useSelector((state: RootState) => state.themeMode.defTheme) === 'dark';
  return (
    <Text
    numberOfLines={numberOfLines}
      style={[
        styles.Heading,
        {
          marginTop,
          textAlign: center ? 'center' : 'left',
          color: checkTheme ? Colors.white : Colors.black,
        },
        style,
      ]}>
      {text}
    </Text>
  );
};

export default Heading;
