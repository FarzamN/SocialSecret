import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';
import {GlobalStyle} from '../../Utils/GlobalStyle';
import {BodyProps} from '../../Utils/type';

const Body: FC<BodyProps> = ({children, style}) => {
  return (
    <SafeAreaView style={[GlobalStyle.container, style]}>
      {children}
    </SafeAreaView>
  );
};

export default Body;
