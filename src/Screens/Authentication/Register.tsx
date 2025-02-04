import {View, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  Sub,
  MainInput,
  SelectImage,
  CustomButton,
  ImageBackground,
  ImagePickerModal,
} from '../../Components';
import {GlobalStyle} from '../../Utils/GlobalStyle';
import {useForm} from 'react-hook-form';

import {useImagePicker} from '../../Hooks';
import {Constants, Data} from '../../Utils';
import {InRegister} from '../../Utils/interface';
import {RegisterInput} from '../../Utils/Data';
import {useDispatch} from 'react-redux';

const Register = ({navigation}: InRegister) => {
  const dispatch = useDispatch();
  const {minLength, maxLength, required, emailPattern} = Constants;
  const {
    cameraLaunch,
    galleryLaunch,
    image,
    onClose,
    picker,
    requestCameraPermission,
  } = useImagePicker();
  const onSubmit = () => {
    // dispatch()
    // navigation.navigate('otpScreen', {data: 'email', type: 'register'});
  };
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});

  return (
    <ImageBackground>
      <View style={GlobalStyle.Vertical_Space} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={GlobalStyle.Padding}>
        <SelectImage
          source={
            image?.uri == ''
              ? require('../../Assets/Images/noImage.png')
              : image
          }
          onPress={requestCameraPermission}
        />
        {RegisterInput.map(({name, p, icon, pw}) => {
          const error = errors[name];
          const rules =
            name === 'password' || name === 'c_password'
              ? {
                  required: required('Password'),
                  minLength: minLength,
                  maxLength: maxLength,
                }
              : {
                  required: required(p),
                  pattern: name === 'email' ? emailPattern : undefined,
                };
          return (
            <MainInput
              isIcon
              icon={icon}
              password={pw}
              key={name}
              control={control}
              name={name}
              rules={rules}
              placeholder={p}
              isError={!!error}
              message={error?.message}
              keyboardType={
                name == 'email'
                  ? 'email-address'
                  : name == 'number'
                  ? 'number-pad'
                  : 'default'
              }
            />
          );
        })}
        <View style={GlobalStyle.Vertical_Space} />
        <CustomButton
          title="Continue"
          //onPress={handleSubmit(onSubmit)}
          onPress={onSubmit}
        />
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate('login')}>
          <Sub center text="Already have an account? " marginTop={15} />
        </TouchableOpacity>
      </ScrollView>
      <ImagePickerModal
        isVisible={picker}
        onClose={onClose}
        PressCamera={cameraLaunch}
        PressPicture={galleryLaunch}
      />
    </ImageBackground>
  );
};

export default Register;
