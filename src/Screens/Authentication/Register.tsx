import {View, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  Sub,
  MainInput,
  SelectImage,
  CustomButton,
  ImageBackground,
  ImagePickerModal,
  Loader,
} from '../../Components';
import {GlobalStyle} from '../../Utils/GlobalStyle';
import {SubmitHandler, useForm} from 'react-hook-form';

import {useImagePicker} from '../../Hooks';
import {Constants} from '../../Utils';
import {InRegister, IauthInput, IRegisteInput} from '../../Utils/interface';
import {RegisterInput} from '../../Utils/Data';
import {useDispatch} from 'react-redux';
import {authApi} from '../../redux/actions/authAction';

const Register = ({navigation}: InRegister) => {
  const dispatch = useDispatch();
  const {goBack, navigate} = navigation;
  const {minLength, maxLength, required, emailPattern} = Constants;
  const {image, picker, onOpen, onClose, requestCamera, requestGallery} =
    useImagePicker();

  const [load, setLoad] = useState(false);
  const [error, setError] = useState({msg: '', visible: false});

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IRegisteInput>({mode: 'all'});

  const onSubmit: SubmitHandler<IRegisteInput> = data => {
    if(data.password === data.c_password)
    authApi(data, navigate, setLoad, setError)(dispatch);
  };

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
          onPress={onOpen}
        />
        {RegisterInput.map(({name, p, icon, pw}) => {
          const error = errors[name as keyof IauthInput];
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
            <MainInput<IRegisteInput>
              isIcon
              icon={icon}
              password={pw}
              key={name}
              control={control}
              name={name as keyof IRegisteInput}
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
        <CustomButton loader={load} title="Continue" onPress={handleSubmit(onSubmit)} />
        <TouchableOpacity activeOpacity={1} onPress={goBack}>
          <Sub center text="Already have an account? " marginTop={15} />
        </TouchableOpacity>
      </ScrollView>
      <ImagePickerModal
        isVisible={picker}
        onClose={onClose}
        PressCamera={requestCamera}
        PressPicture={requestGallery}
      />

      <Loader visible={error.visible} isError msg={error.msg} onClose={() => setError({visible:false,msg: ""})}/>
    </ImageBackground>
  );
};

export default Register;
