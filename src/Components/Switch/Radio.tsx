import React, {FC} from 'react';
import {Pressable, View} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {GlobalStyle} from '../../Utils/GlobalStyle';
import {RadioType} from '../../Utils/type';
import {Colors} from '../../Utils';
import {Heading, Sub} from '..';
import {style} from './style';
import {RootState} from '../../redux/store';
import {useSelector} from 'react-redux';

const Radio: FC<RadioType> = ({data, focus, onPress, i}) => {
  const {label, isSub} = data;
  const checkTheme =
    useSelector((state: RootState) => state.themeMode.defTheme) === 'dark';
  const color = !focus
    ? Colors.DarkGrey
    : checkTheme
    ? Colors.DarkYellow
    : Colors.LightYellow;
  return (
    <Pressable
      style={[
        GlobalStyle.PaddingHor,
        {marginTop: i === 0 ? 15 : 10, paddingVertical: 5},
      ]}
      onPress={onPress}
      android_ripple={GlobalStyle.ripple}>
      <View style={[GlobalStyle.Space_Between]}>
        <Sub text={label} style={{color, fontWeight: '500'}} />
        <RadioButton
          value={label}
          onPress={onPress}
          uncheckedColor={Colors.DarkGrey}
          status={focus ? 'checked' : 'unchecked'}
          color={checkTheme ? Colors.DarkYellow : Colors.LightYellow}
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

// import {View, Text} from 'react-native';
// import React, {FC} from 'react';
// import {GlobalStyle} from '../../Utils/GlobalStyle';
// import Icon, {IconType} from 'react-native-dynamic-vector-icons';
// const SimpleRadio: FC = () => {
//   return (
//     <View style={GlobalStyle.Space_Between}>
//       <Text>SimpleRadio</Text>
//     </View>
//   );
// };

// export default SimpleRadio;
