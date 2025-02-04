import {StatusBar, View} from 'react-native';
import React from 'react';
import {FullImage, ImageBackground, Sub} from '../Components';
import {style} from './style';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {
  DrawerContentScrollView,
  DrawerItemList,
  useDrawerStatus,
} from '@react-navigation/drawer';
import {Row} from '../Utils/GlobalStyle';
import {Avatar} from 'react-native-paper';

const DrawerContainer = props => {
  const Theme = useSelector((state: RootState) => state.themeMode.defTheme);
  const dark = Theme === 'dark';
  const isDrawerOpen = useDrawerStatus() === 'open';

  const drawerBG = dark ? '#F1F1F1' : '#00103B';
  const normalBG = dark ? '#00040F' : '#F1F1F1';

  const drawerBar = dark ? 'dark-content' : 'light-content';
  const normalBar = dark ? 'light-content' : 'dark-content';
  return (
    <ImageBackground>
      <StatusBar
        backgroundColor={isDrawerOpen ? drawerBG : normalBG}
        barStyle={isDrawerOpen ? drawerBar : normalBar}
      />
      <FullImage
        resizeMode="cover"
        style={style.ImageBox}
        source={
          dark
            ? require('../Assets/Images/Backgrounds/whiteBack.jpg')
            : require('../Assets/Images/Backgrounds/darkBack.jpg')
        }
      />
      <Row>
        <Avatar.Image
          style={style.AvatarBox}
          size={100}
          source={require('../Assets/Images/noImage.png')}
        />
        <View style={style.TextBox}>
          <Sub text="Farzam Noor" />
          <Sub text="frzamn64ml@gmail.com" />
        </View>
      </Row>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </ImageBackground>
  );
};

export default DrawerContainer;
