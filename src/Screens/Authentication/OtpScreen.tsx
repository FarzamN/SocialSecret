import {
  View,
  Text,
  Keyboard as RNKeyboard,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {AuthBody, Keyboard, Sub} from '../../Components';
import {
  Cursor,
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {style} from './style';
import {Colors} from '../../Utils';
import {GlobalStyle} from '../../Utils/GlobalStyle';
import {InOtpScreen} from '../../Utils/interface';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

const OtpScreen = ({navigation, route}: InOtpScreen) => {
  const {data, type} = route.params;

  const [value, setValue] = useState<string>('');
  const [isKeyboard, setKeyboard] = useState<boolean>(true);
  const dark =
    useSelector((state: RootState) => state.themeMode.defTheme) === 'dark';
  const ref = useBlurOnFulfill({value, cellCount: 4});
  const [props, cellHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  console.log(type);
  const otp = (1234).toString();

  const handleResend = () => {
    console.log(otp);
  };

  const handlePressKey = (num: string) => {
    if (value.length < 4) {
      setValue(prevValue => prevValue + num);
    }
  };

  const handleDelete = () => {
    setValue(prevValue => prevValue.slice(0, -1));
  };

  const onSubmit = () => {
    if (value === otp) {
      navigation.navigate('changePassword');
    }
  };

  useEffect(() => {
    const keyShow = RNKeyboard.addListener('keyboardDidShow', () =>
      setKeyboard(false),
    );
    const keyHide = RNKeyboard.addListener('keyboardDidHide', () =>
      setKeyboard(true),
    );

    return () => {
      keyShow.remove();
      keyHide.remove();
    };
  }, []);

  return (
    <AuthBody
      noButton
      heading="Enter Verfication Code"
      sub={`Otp has been sent to you in ${data.email}`}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        rootStyle={style.codeFieldRoot}
        textContentType="oneTimeCode"
        keyboardType="number-pad"
        onSubmitEditing={onSubmit}
        renderCell={({index, symbol, isFocused}) => (
          <View
            key={index}
            style={[
              style.CellBox,
              isFocused && {backgroundColor: Colors.White},
            ]}>
            <Text
              style={[style.cell, isFocused && {color: Colors.Black}]}
              onLayout={cellHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
      <View style={[GlobalStyle.row_center, {marginVertical: 10}]}>
        <Sub text="Don't receive the OTP? " />
        <TouchableOpacity activeOpacity={1} onPress={handleResend}>
          <Sub
            text="Resend"
            style={[
              style.resendText,
              {color: dark ? Colors.DarkYellow : Colors.LightYellow},
            ]}
          />
        </TouchableOpacity>
      </View>
      <Keyboard
        onPressKey={handlePressKey}
        onDelete={handleDelete}
        onDone={onSubmit}
        visible={isKeyboard}
      />
      <View style={GlobalStyle.Vertical_Space} />
    </AuthBody>
  );
};

export default OtpScreen;
