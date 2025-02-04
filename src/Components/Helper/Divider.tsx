import {View} from 'react-native';
import React, {FC} from 'react';
import {style as styles} from './style';
import {DividerType} from '../../Utils/type';

const Divider: FC<DividerType> = props => {
  const {style} = props;
  return <View style={[styles.Divider, style]} />;
};

export default Divider;
