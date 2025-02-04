import {Pressable} from 'react-native';
import React, {FC} from 'react';
import {Sub} from '..';
import {GlobalStyle, Row} from '../../Utils/GlobalStyle';
import {style} from './style';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {Colors} from '../../Utils';
import {SettingCardType} from '../../Utils/type';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

const SettingCard: FC<SettingCardType> = ({data}) => {
  const {title, onPress, iconName, type} = data;
  const dark =
    useSelector((state: RootState) => state.themeMode.defTheme) === 'dark';
  const color = dark ? Colors.White : Colors.Black;
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
          size={20}
          name={iconName}
          type={type}
          style={{marginRight: 15}}
          color={iconName === 'delete-alert' ? Colors.Red : color}
        />
        <Sub text={title} style={style.scTitle} />
      </Row>
      <Icon
        size={20}
        name="chevron-right"
        type={IconType.Entypo}
        color={dark ? Colors.DarkYellow : Colors.LightYellow}
      />
    </Pressable>
  );
};

export default SettingCard;
