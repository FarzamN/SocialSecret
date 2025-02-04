import {style} from './style';
import React from 'react';
import {View} from 'react-native';
import {GlobalStyle} from '../../Utils/GlobalStyle';
import {InOverBoard} from '../../Utils/interface';
import {
  CustomButton,
  FullImage,
  Heading,
  ImageBackground,
} from '../../Components';
import {OverboardButton} from '../../Utils/Data';

const OverBoard = ({navigation}: InOverBoard) => {
  return (
    <ImageBackground between>
      {/* <FullImage
        style={style.Image_Box}
        source={require('../../Assets/Images/logo.png')}
      /> */}

      <Heading center text="Chat for life" />
      <View style={style.Overboard_Box}>
        {OverboardButton.map(({path, reverse, title}) => (
          <CustomButton
            title={title}
            white={reverse}
            key={title.toString()}
            onPress={() => navigation.navigate(path)}
          />
        ))}
        <View style={GlobalStyle.Vertical_Space} />
      </View>
    </ImageBackground>
  );
};

export default OverBoard;
