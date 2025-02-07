import styles from './style';
import React, {FC} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import { Constants} from '../../Utils';
import {CustomButtonProps} from '../../Utils/type';
import {GlobalStyle} from '../../Utils/GlobalStyle';
import {Text, ActivityIndicator, View} from 'react-native';
import AwesomeButton from 'react-native-really-awesome-button';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import { darkTheme, lightTheme,Colors } from '../../Utils/Colors';
import responsive, { HEIGHT_SIZES, width } from '../../Utils/responsive';

const CustomButton: FC<CustomButtonProps> = props => {
  const {
    onPress,
    loader,
    style,
    disabled,
    title,
    marginTop,
    small,
    round,
    white,
    isMarginTop,
    textRestyle,
    Google,
  } = props;
  const Theme = useSelector((state: RootState) => state.themeMode.defTheme);
  const dark = Theme === 'dark';
  const bgColor = dark ? darkTheme.yellow : lightTheme.yellow;
  const back = white || Google ? Colors.white : loader ? Colors.grey : bgColor;

  return (
    <AwesomeButton
      height={HEIGHT_SIZES.DEFAULT}
      raiseLevel={5}
      onPress={onPress}
      backgroundColor={back}
      backgroundDarker={back}
      disabled={disabled || loader}
      borderRadius={round ? responsive.borderRadius(100) : responsive.borderRadius(10)}
      width={small ? width - 100 : width - 20}
      style={[
        styles.containerStyle,
        {marginTop: isMarginTop ? marginTop : responsive.space(12)},
        style,
      ]}>
      <View style={GlobalStyle.row}>
        {loader && (
          <ActivityIndicator
            size={20}
            color={Colors.black}
            style={{marginRight: responsive.space(10)}}
          />
        )}
        {Google && (
          <Icon
            name="google"
            size={responsive.fontSize(17)}
            color={Colors.black}
            type={IconType.AntDesign}
            style={{marginRight: responsive.space(10)}}
          />
        )}
        <Text
          style={[
            styles.title,
            {color: white || loader || Google ? Colors.black : Colors.white},
            textRestyle,
          ]}>
          {loader ? 'Loading...' : title}
        </Text>
      </View>
    </AwesomeButton>
  );
};

export default CustomButton;
