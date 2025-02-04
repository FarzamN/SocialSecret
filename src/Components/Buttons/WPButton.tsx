import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import style from './style';
import {GlobalStyle} from '../../Utils/GlobalStyle';
import Sub from '../Texts/Sub';
import {WPButtonType} from '../../Utils/type';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {Colors} from '../../Utils';

const WPButton: FC<WPButtonType> = props => {
  const {onPress, small, onFav, fav} = props;
  return small ? (
    <TouchableOpacity
      onPress={onFav}
      style={[
        style.WPContainer,
        GlobalStyle.justify,
        {aspectRatio: 1 / 1, marginRight: 5},
      ]}>
      <Icon
        size={20}
        type={IconType.AntDesign}
        name={fav ? 'heart' : 'hearto'}
        color={fav ? Colors.Red : Colors.Black}
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
