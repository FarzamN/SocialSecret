import {Constants} from '../../Utils';
import {useForm} from 'react-hook-form';
import React, { useState } from 'react';
import {AuthBody, MainInput} from '../../Components';
import { findEmailnPhone } from '../../redux/actions/authAction';
import {IauthInput, InForgetPassword} from '../../Utils/interface';

const ForgetPassword = ({navigation,route}: InForgetPassword) => {
  const {type} = route.params
  const {navigate} = navigation
  const phone = type === "phone"
  const {required, emailPattern} = Constants;

  const [load,setLoad] = useState<boolean>(false)

  const onSubmit = (data: IauthInput) => {
   findEmailnPhone(data,type, navigate,setLoad)
  };
  const subs = phone ? "phone" :"email"
  const title = phone ? "Phone Number" :"Email"
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});
  return (
    <AuthBody
    load={load}
      title="Submit"
      heading={`Enter Your ${title}`}
      onPress={handleSubmit(onSubmit)}

      sub={`In this ${title} we will send you a OTP`}>
      <MainInput
       small
        isIcon
      // outlined
        icon={subs}
        name={subs}
        control={control}
        placeholder={title}
        rules={{
          required: required(subs),
          pattern: phone ? undefined : emailPattern,
        }}
        isError={phone ?  errors?.phone :  errors.email}
        keyboardType={phone ? "number-pad" :'email-address'}
        message={phone ?  errors?.phone?.message :  errors?.email?.message}
      />
    </AuthBody>
  );
};

export default ForgetPassword;