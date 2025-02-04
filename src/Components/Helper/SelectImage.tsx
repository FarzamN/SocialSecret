import {View, Image, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {style} from './style';
import {GlobalStyle} from '../../Utils/GlobalStyle';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {Colors} from '../../Utils';
import {ImageType} from '../../Utils/type';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

const SelectImage: FC<ImageType> = props => {
  const {onPress, source} = props;
  const dark =
    useSelector((state: RootState) => state.themeMode.defTheme) === 'dark';
  return (
    <View style={style.ImageContainer}>
      <Image
        resizeMode="contain"
        style={[GlobalStyle.full, {borderRadius: 100}]}
        source={source}
      />
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={style.IconBox}>
        <Icon
          size={16}
          name="camera"
          type={IconType.Entypo}
          color={dark ? Colors.DarkYellow : Colors.LightYellow}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SelectImage;
