import {TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {style} from './style';
import {GlobalStyle} from '../../Utils/GlobalStyle';
import {useNavigation} from '@react-navigation/native';

const WPBack: FC = () => {
  const {goBack} = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => goBack()}
      style={[style.WPBackCont, GlobalStyle.justify]}>
      <Icon color="#000" size={25} name="chevron-left" type={IconType.Entypo} />
    </TouchableOpacity>
  );
};

export default WPBack;
