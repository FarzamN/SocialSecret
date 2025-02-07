import {styles} from './style';
import React, {useState} from 'react';
import Toast from 'react-native-simple-toast';
import { Colors } from '../../../Utils/Colors';
import {IApplyImage} from '../../../Utils/interface';
import MW, {TYPE} from 'react-native-manage-wallpaper';
import {GlobalStyle} from '../../../Utils/GlobalStyle';
import {View, ImageBackground, StatusBar} from 'react-native';
import {WPBack, WPButton, WpSelectModal} from '../../../Components';

const ApplyImage = ({navigation, route}: IApplyImage) => {
  const {item} = route.params;
  const {source} = item;
  const [load, setLoad] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const callback = (res: {msg: string}) => {
    const {msg} = res;
    Toast.show(msg, Toast.SHORT);
    setLoad(false);
    setShowModal(false);
  };

  const handleWP = (e: any) => {
    setLoad(true);
    console.log('source', source)
    // MW.setWallpaper({uri: source}, callback, e);
  };
  return (
    <ImageBackground
      style={GlobalStyle.container}
      resizeMode="cover"
      source={{uri: source}}>
      <StatusBar backgroundColor={Colors.Non} translucent />
      <WPBack />
      <View style={styles.ApplyImageButton}>
        <WPButton small fav />
        <WPButton onPress={() => setShowModal(true)} />
      </View>
      <WpSelectModal
       
        visible={showModal}
        load={load}
        onHome={() => handleWP(TYPE.HOME)}
        onLock={() => handleWP(TYPE.LOCK)}
        onBoth={() => handleWP(TYPE.BOTH)}
        onClose={() => setShowModal(false)}
      />
    </ImageBackground>
  );
};

export default ApplyImage;
