import {View} from 'react-native';
import React from 'react';
import {useForm} from 'react-hook-form';
import {AuthBody, MainInput} from '../../Components';
import {Constants} from '../../Utils';
import {GlobalStyle} from '../../Utils/GlobalStyle';
import {ChangePasswordInput} from '../../Utils/Data';

const ChangePassword = () => {
  const {minLength, maxLength, required} = Constants;

  const onSubmit = (data: object) => {
    console.log(data);
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});
  return (
    <AuthBody
      heading="Enter a new Password"
      sub={`Change your passowrd now and please\nkeep in mind this time`}
      title="Submit"
      onPress={handleSubmit(onSubmit)}>
      <View style={GlobalStyle.Vertical_Space} />
      {ChangePasswordInput.map(({name, p}) => {
        const isPassword = name === 'password';
        const error = errors[isPassword ? 'password' : 'c_password'];
        const rules = {
          required: required(isPassword ? 'Password' : 'Confirm Password'),
          minLength,
          maxLength,
        };
        return (
          <MainInput
            isIcon
            icon={'form-textbox-password'}
            password
            key={name}
            control={control}
            name={name}
            rules={rules}
            placeholder={p}
            isError={error}
            message={error?.message}
          />
        );
      })}
    </AuthBody>
  );
};

export default ChangePassword;
