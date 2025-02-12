import React, {FC} from 'react';
import {Pressable, View} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {GlobalStyle} from '../../Utils/GlobalStyle';
import {RadioType} from '../../Utils/type';
import {Heading, Sub} from '..';
import {style} from './style';
import {RootState} from '../../redux/store';
import {useSelector} from 'react-redux';
import responsive from '../../Utils/responsive';
import {Colors, darkTheme, lightTheme} from '../../Utils/Colors';

const Radio: FC<RadioType> = ({data, focus, onPress, i}) => {
  const {label, isSub} = data;
  const isDark =
    useSelector((state: RootState) => state.themeMode.defTheme) === 'dark';
  const color = !focus
    ? Colors.ThemeGrey
    : isDark
    ? darkTheme.yellow
    : lightTheme.yellow;
  return (
    <Pressable
      style={[
        GlobalStyle.PaddingHor,
        {
          marginTop: i === 0 ? responsive.space(15) : responsive.space(10),
          paddingVertical: responsive.space(5),
        },
      ]}
      onPress={onPress}
      android_ripple={GlobalStyle.ripple}>
      <View style={[GlobalStyle.Space_Between]}>
        <Sub text={label} style={{color, fontWeight: '500'}} />
        <RadioButton
          value={label}
          onPress={onPress}
          uncheckedColor={Colors.ThemeGrey}
          status={focus ? 'checked' : 'unchecked'}
          color={isDark ? darkTheme.yellow : lightTheme.yellow}
        />
      </View>
      {isSub && (
        <Heading
          style={style.Heading}
          text="Set Device Theme to sync your Theme with your device's Apparance"
        />
      )}
    </Pressable>
  );
};

export default Radio;
