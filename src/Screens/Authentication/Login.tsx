import React, {FC, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {
  Sub,
  Divider,
  AuthBody,
  MainInput,
  Validation,
  CustomButton,
} from '../../Components';
import {Constants} from '../../Utils';
import {useDispatch} from 'react-redux';
import {useForm, SubmitHandler, FieldValues} from 'react-hook-form';
import {ILogin, ILoginInput} from '../../Utils/interface';
import {GlobalStyle} from '../../Utils/GlobalStyle';
import {loginApi} from '../../redux/actions/authAction';

import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';
import {LoginInput} from '../../Utils/Data';
import {AppDispatch} from '../../redux/store';
import {setUser} from '../../redux/slices/authSlice';
import responsive from '../../Utils/responsive';

const Login: FC<ILogin> = ({navigation}) => {
  const {required, emailPattern, minLength, maxLength} = Constants;
  const {navigate} = navigation;
  const offset = useSharedValue(0);
  const dispatch: AppDispatch = useDispatch();

  const [load, setLoad] = useState<boolean>(false);
  const [error, setError] = useState<{visible: boolean; msg: string}>({
    visible: false,
    msg: '',
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: offset.value}],
  }));

  const OFFSET = 40;
  const TIME = 250;

  const shake = () => {
    offset.value = withSequence(
      withTiming(-OFFSET, {duration: TIME / 2}),
      withRepeat(withTiming(OFFSET, {duration: TIME}), 3, true),
      withTiming(0, {duration: TIME / 2}),
    );
  };

  const onSubmit: SubmitHandler<ILoginInput> = async inputs => {
    setError({visible: false, msg: ''});
    // dispatch(loginApi(inputs, setLoad, setError, shake));
    dispatch(setUser(inputs));
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<ILoginInput>({
    mode: 'all',
  });

  return (
    <AuthBody
      noButton
      heading="Please login to continue"
      sub="If You are new Please Register an Account">
      <View style={GlobalStyle.Vertical_Space} />
      <View style={GlobalStyle.Vertical_Space} />

      {LoginInput.map(({name, p, icon, def}) => {
        const isPassword = name === 'password';
        const isError = errors[isPassword ? 'password' : 'email'];
        const rules = isPassword
          ? {
              minLength,
              maxLength,
              required: required('Password'),
            }
          : {
              required: required('Email'),
              pattern: emailPattern,
            };
        return (
          <Animated.View key={name} style={[animatedStyle]}>
            <MainInput
              isIcon
              icon={icon}
              name={name}
              rules={rules}
              placeholder={p}
              control={control}
              isError={!!isError}
              password={isPassword}
              defaultValue={`${def}`}
              message={isError?.message}
              keyboardType={isPassword ? 'default' : 'email-address'}
            />
          </Animated.View>
        );
      })}
      <Validation
        isError={error.visible}
        message="Email or password is invalid"
      />
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigate('ForgetPassword')}>
        <Sub
          marginTop={responsive.space(10)}
          text="Forget Password?"
          style={{textAlign: 'right'}}
        />
      </TouchableOpacity>
      <CustomButton
        title="Login"
        loader={load}
        onPress={handleSubmit(onSubmit)}
      />
      <TouchableOpacity activeOpacity={1} onPress={() => navigate('register')}>
        <Sub center text="Don't have an account? " marginTop={responsive.space(15)} />
      </TouchableOpacity>
      <View style={GlobalStyle.mt} />
      <Divider />
      <CustomButton Google title="Login with Google" />
    </AuthBody>
  );
};

export default Login;
