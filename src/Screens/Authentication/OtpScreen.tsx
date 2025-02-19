import {
  View,
  Text,
  Keyboard as RNKeyboard,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {AuthBody, Keyboard, Loader, Sub} from '../../Components';
import {
  Cursor,
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {style} from './style';
import {GlobalStyle} from '../../Utils/GlobalStyle';
import {InOtpScreen} from '../../Utils/interface';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {Colors, darkTheme, lightTheme} from '../../Utils/Colors';
import {resendOtp, registerApi} from '../../redux/actions/authAction';

const OtpScreen = ({navigation, route}: InOtpScreen) => {
  const dispatch = useDispatch();
  const {navigate} = navigation;
  const {data, type} = route.params;

  const {otp} = useSelector((state: RootState) => state.auth);
  const [value, setValue] = useState<string>('');
  const [load, setLoad] = useState(false);
  const [error, setError] = useState({msg: '', visible: false});

  const num = 60;
  const [counter, setCounter] = useState(num);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const handleResend = () => {
    resendOtp(data, setCounter)(dispatch);
    // if (type === 'register')
  };

  const [isKeyboard, setKeyboard] = useState<boolean>(true);
  const dark =
    useSelector((state: RootState) => state.themeMode.defTheme) === 'dark';
  const ref = useBlurOnFulfill({value, cellCount: 4});
  const [props, cellHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handlePressKey = (num: number) => {
    if (value.length < 4) {
      setValue(prevValue => prevValue + num);
    }
  };

  const handleDelete = () => {
    setValue(prevValue => prevValue.slice(0, -1));
  };

  const onSubmit = () => {
    if (value == otp) {
      if (type === 'register') {
        registerApi(data, setLoad, setError)(dispatch);
      } else if (type === 'forget') {
        navigate('changePassword', {id: data});
      }
    } else {
      setError({visible: true, msg: 'invalid otp'});
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
      sub={`Otp has been sent to you in ${otp + data.email}`}>
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
              isFocused && {backgroundColor: Colors.white},
            ]}>
            <Text
              style={[style.cell, isFocused && {color: Colors.black}]}
              onLayout={cellHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
      {load ? (
        <Sub
          center
          text="Loading..."
          style={[
            style.resendText,
            {
              marginVertical: 10,
              color: dark ? darkTheme.yellow : lightTheme.yellow,
            },
          ]}
        />
      ) : (
        <View style={[GlobalStyle.row_center, {marginVertical: 10}]}>
          <Sub
            text={counter === 0 ? "Don't receive the OTP? " : 'Resend code in '}
          />

          <TouchableOpacity
            activeOpacity={1}
            disabled={counter !== 0}
            onPress={handleResend}>
            <Sub
              text={
                counter === 0
                  ? 'Resend'
                  : `${counter} ${counter > 1 ? 'secs' : 'sec'}`
              }
              style={[
                style.resendText,
                {color: dark ? darkTheme.yellow : lightTheme.yellow},
              ]}
            />
          </TouchableOpacity>
        </View>
      )}

      <Keyboard
        onPressKey={handlePressKey}
        onDelete={handleDelete}
        onDone={onSubmit}
        visible={isKeyboard}
      />
      <Loader
        visible={error.visible}
        isError
        msg={error.msg}
        onClose={() => setError({visible: false, msg: ''})}
      />

      <View style={GlobalStyle.Vertical_Space} />
    </AuthBody>
  );
};

export default OtpScreen;
