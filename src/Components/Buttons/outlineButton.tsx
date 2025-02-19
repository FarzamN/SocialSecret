import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {Sub} from '..';
import style from './style';
import { OutlineButtonProps } from '../../Utils/type';

const OutlineButton: FC<OutlineButtonProps> = props => {
  const {onPress, title, center, marginTop} = props;
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={[
        style.outlineCont,
        {
            // backgroundColor:'red',
            alignItems: center ? 'center' : 'flex-end',
        },
      ]}>
      <Sub text={title} marginTop={marginTop} />
    </TouchableOpacity>
  );
};

export default OutlineButton;
