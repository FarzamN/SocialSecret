import React from 'react';
import {AuthBody, MainInput} from '../../Components';
import {useForm} from 'react-hook-form';
import {Constants} from '../../Utils';
import {InForgetPassword} from '../../Utils/interface';

const ForgetPassword = ({navigation}: InForgetPassword) => {
  const {required, emailPattern} = Constants;

  const onSubmit = (data: object) => {
    navigation.navigate('otpScreen', {data, type: 'forget'});
  };
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});
  return (
    <AuthBody
      title="Submit"
      heading="Enter Your Email"
      onPress={handleSubmit(onSubmit)}
      sub="In this Email we will send you a OTP (One Time Passcode)">
      <MainInput
        isIcon
        icon="email"
        outlined
        control={control}
        name="email"
        rules={{
          required: required('Email'),
          pattern: emailPattern,
        }}
        placeholder="Email"
        isError={errors.email}
        message={errors?.email?.message}
        keyboardType={'email-address'}
      />
    </AuthBody>
  );
};

export default ForgetPassword;

{
  /*
<ImageBackground>
  <ScrollView
    style={GlobalStyle.Padding}
    showsVerticalScrollIndicator={false}>
    <FullImage
      style={style.Image_Box}
      source={require('../../Assets/Images/otp.png')}
    />
    <Heading text="Enter Your Email" center />
    <View style={GlobalStyle.Vertical_Space} />
    <Sub
      center
      text="In this Email we will send you a OTP (One Time Passcode)"
    />
    <View style={GlobalStyle.Vertical_Space} />
    <MainInput
      isIcon
      icon="email"
      outlined
      control={control}
      name="email"
      rules={{
        required: required('Email'),
        pattern: emailPattern,
      }}
      placeholder="Email"
      isError={errors.email}
      message={errors?.email?.message}
      keyboardType={'email-address'}
    />
    <View style={GlobalStyle.Vertical_Space} />
    <View style={GlobalStyle.Vertical_Space} />
    <CustomButton title="Submit" onPress={handleSubmit(onSubmit)} />
  </ScrollView>
</ImageBackground>
*/
}
