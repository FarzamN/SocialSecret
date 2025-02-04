import styles from './style';
import React, {FC} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {Colors, Constants} from '../../Utils';
import {CustomButtonProps} from '../../Utils/type';
import {GlobalStyle} from '../../Utils/GlobalStyle';
import {Text, ActivityIndicator, View} from 'react-native';
import AwesomeButton from 'react-native-really-awesome-button';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

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
  const {width} = Constants;
  const bgColor = dark ? Colors.DarkYellow : Colors.LightYellow;
  const back = white || Google ? Colors.White : loader ? Colors.Grey : bgColor;

  return (
    <AwesomeButton
      height={48}
      raiseLevel={5}
      onPress={onPress}
      backgroundColor={back}
      backgroundDarker={back}
      disabled={disabled || loader}
      borderRadius={round ? 100 : 10}
      width={small ? width - 100 : width - 20}
      style={[
        styles.containerStyle,
        {marginTop: isMarginTop ? marginTop : 12},
        style,
      ]}>
      <View style={GlobalStyle.row}>
        {loader && (
          <ActivityIndicator
            size={20}
            color={Colors.Black}
            style={{marginRight: 10}}
          />
        )}
        {Google && (
          <Icon
            name="google"
            size={17}
            color={Colors.Black}
            type={IconType.AntDesign}
            style={{marginRight: 10}}
          />
        )}
        <Text
          style={[
            styles.title,
            {color: white || loader || Google ? Colors.Black : Colors.White},
            textRestyle,
          ]}>
          {loader ? 'Loading...' : title}
        </Text>
      </View>
    </AwesomeButton>
  );
};

export default CustomButton;
