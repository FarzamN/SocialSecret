import {
  Sub,
  Divider,
  AuthBody,
  MainInput,
  Validation,
  CustomButton,
  ForgetModal,
  OutlineButton,
} from '../../Components';
import Animated, {
  withTiming,
  withRepeat,
  withSequence,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {Button, View} from 'react-native';
import {Constants} from '../../Utils';
import {useDispatch} from 'react-redux';
import React, {FC, useState} from 'react';
import {LoginInput} from '../../Utils/Data';
import {AppDispatch} from '../../redux/store';
import {GlobalStyle} from '../../Utils/GlobalStyle';
import {useForm, SubmitHandler} from 'react-hook-form';
import {loginApi} from '../../redux/actions/authAction';
import {ILogin, ILoginInput} from '../../Utils/interface';
import {Notifier, Easing} from 'react-native-notifier';
import { showNotification } from '../../Components/Helper/NotifierHelper';

const Login: FC<ILogin> = ({navigation}) => {
  const {required, emailPattern, minLength, maxLength} = Constants;
  const {navigate} = navigation;
  const offset = useSharedValue(0);
  const dispatch: AppDispatch = useDispatch();

  const [load, setLoad] = useState<boolean>(false);
  const [showForget, setShowForget] = useState<boolean>(false);

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
    loginApi(inputs, setLoad, setError, shake)(dispatch);
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<ILoginInput>({
    mode: 'all',
  });

  return (
    <>
      <AuthBody
        noButton
        heading="Please login to continue"
        sub="If You are new Please Register an Account">
        <View style={GlobalStyle.Vertical_Space} />
        <View style={GlobalStyle.Vertical_Space} />

        {LoginInput.map(({name, p, icon}) => {
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
                small
                isIcon
                icon={icon}
                name={name}
                rules={rules}
                placeholder={p}
                control={control}
                isError={!!isError}
                password={isPassword}
                // defaultValue={`${def}`}
                message={isError?.message}
                keyboardType={isPassword ? 'default' : 'email-address'}
              />
            </Animated.View>
          );
        })}
        <Validation mh={20} message={error.msg} isError={error.visible} />
        {/* <TouchableOpacity
          activeOpacity={1}
          >
          <Sub
            marginTop={responsive.space(10)}
            text="?"
            style={{textAlign: 'right',marginRight:SPACING.DEFAULT}}
          />
        </TouchableOpacity> */}
        <OutlineButton
          onPress={() => setShowForget(true)}
          title="Forget Password?"
        />

        <CustomButton
          isMarginTop
          marginTop={0}
          title="Login"
          loader={load}
          onPress={handleSubmit(onSubmit)}
        />

        <OutlineButton
          center
          onPress={() => navigate('register')}
          title="Don't have an account?"
        />

        {/* <View style={GlobalStyle.mt} /> */}
        <Divider />
        <CustomButton
          Google
          title="Login with Google"
         
        />
         <Button title="Success" onPress={() => showNotification("success", "Success!", "Your action was successful.")} />
      <Button title="Error" onPress={() => showNotification("error", "Error!", "Something went wrong.")} />
      <Button title="Info" onPress={() => showNotification("info", "Info", "This is an information message.")} />
  
      </AuthBody>
      <ForgetModal
        visible={showForget}
        onClose={() => setShowForget(false)}
        onEmail={() => navigate('forgetPassword', {type: 'email'})}
        onPhone={() => navigate('forgetPassword', {type: 'phone'})}
      />
    </>
  );
};

export default Login;
