import React, {FC} from 'react';
import {Pressable} from 'react-native';
import {GlobalStyle, Row} from '../../Utils/GlobalStyle';
import {style} from './style';
import {WPSelectCardType} from '../../Utils/type';
import Sub from '../Texts/Sub';
import {Colors} from '../../Utils';
import Icon from 'react-native-dynamic-vector-icons';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

const WPSelectCard: FC<WPSelectCardType> = props => {
  const {title, onPress, iconName, type} = props;
  const Theme = useSelector((state: RootState) => state.themeMode.defTheme);
  const dark = Theme === 'dark';
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
          color={dark ? Colors.DarkYellow : Colors.LightYellow}
        />
        <Sub text={`${title}`} style={style.scTitle} />
      </Row>
    </Pressable>
  );
};

export default WPSelectCard;
