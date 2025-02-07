import { TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import style from './style';
import {GlobalStyle} from '../../Utils/GlobalStyle';
import Sub from '../Texts/Sub';
import {WPButtonType} from '../../Utils/type';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import responsive from '../../Utils/responsive';
import { Colors } from '../../Utils/Colors';

const WPButton: FC<WPButtonType> = props => {
  const {onPress, small, onFav, fav} = props;
  return small ? (
    <TouchableOpacity
      onPress={onFav}
      style={[
        style.WPContainer,
        GlobalStyle.justify,
        {aspectRatio: 1 / 1, marginRight: responsive.space(5)},
      ]}>
      <Icon
        size={responsive.fontSize(20)}
        type={IconType.AntDesign}
        name={fav ? 'heart' : 'hearto'}
        color={fav ? Colors.error : Colors.black}
      />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      onPress={onPress}
      style={[style.WPContainer, GlobalStyle.justify, {width: '80%'}]}>
      <Sub text="Set to Wallpaper" style={style.text} />
    </TouchableOpacity>
  );
};

export default WPButton;
