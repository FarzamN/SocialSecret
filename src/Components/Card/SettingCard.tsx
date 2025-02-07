import {Pressable} from 'react-native';
import React, {FC} from 'react';
import {Sub} from '..';
import {GlobalStyle, Row} from '../../Utils/GlobalStyle';
import {style} from './style';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {SettingCardType} from '../../Utils/type';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import { Colors, darkTheme, lightTheme } from '../../Utils/Colors';
import responsive from '../../Utils/responsive';

const SettingCard: FC<SettingCardType> = ({data}) => {
  const {title, onPress, iconName, type} = data;
  const dark =
    useSelector((state: RootState) => state.themeMode.defTheme) === 'dark';
  const color = dark ? Colors.white : Colors.black;
  return (
    <Pressable
      android_ripple={GlobalStyle.ripple}
      style={[
        GlobalStyle.Space_Between,
        GlobalStyle.PaddingHor,
        style.scContainer,
      ]}
      onPress={onPress}>
      <Row>
        <Icon
          name={iconName}
          type={type}
          size={responsive.fontSize(20)}
          style={{marginRight: responsive.space(15)}}
          color={iconName === 'delete-alert' ? lightTheme.error : color}
        />
        <Sub text={title} style={style.scTitle} />
      </Row>
      <Icon
        name="chevron-right"
        type={IconType.Entypo}
        size={responsive.fontSize(20)}
        color={dark ? darkTheme.yellow : lightTheme.yellow}
      />
    </Pressable>
  );
};

export default SettingCard;
