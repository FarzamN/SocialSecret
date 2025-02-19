import {
  IRegisteInput,
  InChangePassword,
} from '../../Utils/interface';
import {View} from 'react-native';
import {Constants} from '../../Utils';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {GlobalStyle} from '../../Utils/GlobalStyle';
import {ChangePasswordInput} from '../../Utils/Data';
import {AuthBody, Loader, MainInput} from '../../Components';
import {changePasswordAuth} from '../../redux/actions/authAction';

const ChangePassword = ({navigation, route}: InChangePassword) => {
  const {id} = route.params;
  const {navigate} = navigation;
  const {minLength, maxLength, required} = Constants;

  const [load, setLoad] = useState(false);
  const [error, setError] = useState({msg: '', visible: false});

  const onSubmit = (data: IRegisteInput) => {
    if (data.password === data.c_password) {
      changePasswordAuth(data, id, navigate, setLoad);
    } else {
      setError({msg: "Password didn't match", visible: true});
    }
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});
  return (
    <>
      <AuthBody
        load={load}
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
      <Loader
        isError
        msg={error.msg}
        visible={error.visible}
        onClose={() => setError({visible: false, msg: ''})}
      />
    </>
  );
};

export default ChangePassword;
