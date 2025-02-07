import {style} from './style';
import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import { FONT_SIZES } from '../../Utils/responsive';
import {GlobalStyle} from '../../Utils/GlobalStyle';
import {useNavigation} from '@react-navigation/native';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

const WPBack: FC = () => {
  const {goBack} = useNavigation();
  return (
    <TouchableOpacity
      onPress={goBack}
      style={[style.WPBackCont, GlobalStyle.justify]}>
      <Icon color="#000" size={FONT_SIZES.HEADING} name="chevron-left" type={IconType.Entypo} />
    </TouchableOpacity>
  );
};

export default WPBack;
