import {View, ScrollView} from 'react-native';
import React, {FC} from 'react';
import {CustomButton, FullImage, Heading, ImageBackground, Sub} from '..';
import {GlobalStyle} from '../../Utils/GlobalStyle';
import style from './style';
import {AuthBodyType} from '../../Utils/type';

const AuthBody: FC<AuthBodyType> = props => {
  const {heading, sub, children, onPress, title, noButton} = props;
  return (
    <ImageBackground>
      <ScrollView
        style={GlobalStyle.Padding}
        showsVerticalScrollIndicator={false}>
        <View style={GlobalStyle.Vertical_Space} />
        <View style={GlobalStyle.Vertical_Space} />

        <FullImage
          radius={10}
          style={style.Image_Box}
          source={require('../../Assets/Images/otp.png')}
        />
        <Heading text={heading} center />
        <View style={GlobalStyle.Vertical_Space} />
        <Sub center text={sub} />
        <View style={GlobalStyle.Vertical_Space} />
        {children}
        <View style={GlobalStyle.Vertical_Space} />
        <View style={GlobalStyle.Vertical_Space} />
        {!noButton && <CustomButton title={title} onPress={onPress} />}
      </ScrollView>
    </ImageBackground>
  );
};

export default AuthBody;
