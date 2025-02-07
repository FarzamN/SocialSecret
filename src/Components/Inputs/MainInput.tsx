import {
  Control,
  FieldPath,
  FieldValues,
  useController,
  RegisterOptions,
} from 'react-hook-form';
import style from './style';
import {Validation} from '..';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {MainInputType} from '../../Utils/type';
import React, {FC, forwardRef, useState, Ref} from 'react';
import {TextInput, DefaultTheme} from 'react-native-paper';
import {View, TextInput as RNTextInput} from 'react-native';
import { Colors, darkTheme, lightTheme } from '../../Utils/Colors';

const MainInput: FC<MainInputType> = forwardRef(
  (props, ref: Ref<RNTextInput>) => {
    const {
      Container,
      control,
      defaultValue,
      name,
      rules,
      onFocus,
      multiline,
      placeholder,
      keyboardType,
      password,
      maxLength,
      restyle,
      icon,
      isIcon,
      isError,
      message,
      outlined,
    } = props;

    const [show, setShow] = useState<boolean>(true);

    const {field} = useController({
      control: control as Control<FieldValues>,
      name: name as FieldPath<FieldValues>,
      rules: rules as RegisterOptions,
      defaultValue: defaultValue || '',
    });

    const dark =
      useSelector((state: RootState) => state.themeMode.defTheme) === 'dark';

    const color = dark ? Colors.white : Colors.black;
    const themeErrorColor = dark ? darkTheme.error : lightTheme.error;
    const errorColor = isError ? themeErrorColor : color;

    const mode = outlined ? 'outlined' : 'flat';
    const label = outlined ? placeholder : undefined;
    const cursorColor = dark ? lightTheme.yellow : darkTheme.yellow;
    const placeholderTextColor = dark ? lightTheme.place : lightTheme.place;
    return (
      <View style={[style.Container, Container]}>
        <TextInput
          ref={ref}
          mode={mode}
          label={label}
          error={isError}
          textColor={color}
          onFocus={onFocus}
          value={field.value}
          outlineColor={color}
          multiline={multiline}
          maxLength={maxLength}
          underlineColor={color}
          cursorColor={cursorColor}
          placeholder={placeholder}
          keyboardType={keyboardType}
          onChangeText={field.onChange}
          selectionColor={Colors.AYellow}
          style={[style.InputStyles, restyle]}
          activeOutlineColor={darkTheme.yellow}
          activeUnderlineColor={darkTheme.yellow}
          secureTextEntry={password ? show : false}
          placeholderTextColor={placeholderTextColor}
          theme={{
            ...DefaultTheme,
            roundness: 8,
            colors: {
              error: themeErrorColor,
              background: dark ? Colors.blue : Colors.white,
            },
          }}
          right={
            password && (
              <TextInput.Icon
                color={errorColor}
                icon={show ? 'eye' : 'eye-off'}
                onPress={() => setShow(pre => !pre)}
                rippleColor="rgba(236, 179, 101, 0.6)"
              />
            )
          }
          left={
            isIcon && (
              <TextInput.Icon icon={icon} size={20} color={errorColor} />
            )
          }
        />
        {isError && <Validation isError message={message} />}
      </View>
    );
  },
);

export default MainInput;
