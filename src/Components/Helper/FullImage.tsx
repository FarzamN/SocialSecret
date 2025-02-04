import React, {FC} from 'react';
import {View, Image} from 'react-native';
import {FullImageType} from '../../Utils/type';
import {GlobalStyle} from '../../Utils/GlobalStyle';

const FullImage: FC<FullImageType> = props => {
  const {style, source, ImageStyle, radius, resizeMode} = props;
  return (
    <View style={style}>
      <Image
        source={source}
        resizeMode={resizeMode ? resizeMode : 'contain'}
        style={[GlobalStyle.full, ImageStyle, {borderRadius: radius}]}
      />
    </View>
  );
};

export default FullImage;
