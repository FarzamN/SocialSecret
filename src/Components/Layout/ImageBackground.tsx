import {ImageBackground as IB, View} from 'react-native';
import React, {FC} from 'react';
import {Body} from '..';
import {GlobalStyle} from '../../Utils/GlobalStyle';
import styles from './style';
import {ImageBackgroundType as ibt} from '../../Utils/type';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {Colors} from '../../Utils';

const ImageBackground: FC<ibt> = props => {
  const {children, between} = props;
  const Theme = useSelector((state: RootState) => state.themeMode.defTheme);
  const dark = Theme === 'dark';
  return (
    <Body>
      <IB
        resizeMode="cover"
        source={
          dark
            ? require('../../Assets/Images/Backgrounds/darkBack.jpg')
            : require('../../Assets/Images/Backgrounds/whiteBack.jpg')
        }
        style={[
          GlobalStyle.container,
          {backgroundColor: dark ? Colors.Blue : Colors.White},
        ]}>
        <View
          style={[
            dark && styles.overlay,
            between ? styles.Center_Container : GlobalStyle.container,
          ]}>
          {children}
        </View>
      </IB>
    </Body>
  );
};

export default ImageBackground;
