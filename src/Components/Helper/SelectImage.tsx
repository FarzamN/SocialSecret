import {style} from './style';
import React, {FC} from 'react';
import {useSelector} from 'react-redux';
import {ImageType} from '../../Utils/type';
import {RootState} from '../../redux/store';
import {GlobalStyle} from '../../Utils/GlobalStyle';
import { BORDER_RADIUS, FONT_SIZES } from '../../Utils/responsive';
import { darkTheme, lightTheme } from '../../Utils/Colors';
import {View, Image, TouchableOpacity} from 'react-native';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

const SelectImage: FC<ImageType> = props => {
  const {onPress, source} = props;
  const dark =
    useSelector((state: RootState) => state.themeMode.defTheme) === 'dark';
  return (
    <View style={style.ImageContainer}>
      <Image
        resizeMode="contain"
        style={[GlobalStyle.full, {borderRadius: BORDER_RADIUS.CIRCLE}]}
        source={source}
      />
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={style.IconBox}>
        <Icon
          size={FONT_SIZES.BODY}
          name="camera"
          type={IconType.Entypo}
          color={dark ? darkTheme.yellow : lightTheme.yellow}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SelectImage;
