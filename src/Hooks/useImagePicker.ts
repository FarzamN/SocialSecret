import {useState} from 'react';
import {Platform} from 'react-native';
import {
  openPicker,
  openCamera,
  Config,
} from '@baronha/react-native-multiple-image-picker';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {Colors} from '../Utils/Colors';

const useImagePicker = () => {
  const [image, setImage] = useState({
    fileName: '',
    uri: '',
    type: '',
  });

  const [picker, setPicker] = useState<boolean>(false);

  const config: Config = {
    maxSelect: 10,
    maxVideo: 10,
    primaryColor: Colors.primary,
    backgroundDark: '#2f2f2f',
    numberOfColumn: 4,
    mediaType: 'all',
    selectBoxStyle: 'number',
    selectMode: 'multiple',
    language: 'vi', // 🇻🇳 Vietnamese
    theme: 'dark',
    isHiddenOriginalButton: false,
  };

  const galleryLaunch = async () => {
    try {
      const response = await openPicker(config);
      console.log('response', response)
      setImage({
        fileName: '',
        uri: '',
        type: '',
      });
      if (!response) {
        console.log('User cancelled image picker');
      } else {
        setImage({
          fileName: response.path.split('/').pop(),
          uri: image.path,
          type: image.mime,
        });
        setPicker(false);
      }
    } catch (error) {
      console.log('ImagePicker Error: ', error);
    }
  };

  const cameraLaunch = async () => {
    try {
      const response = await openCamera(config);

      if (!response) {
        console.log('User cancelled image picker');
      } else {
        setImage({
          fileName: image.path.split('/').pop(),
          uri: image.path,
          type: image.mime,
        });
        setPicker(false);
      }
    } catch (error) {
      console.log('ImagePicker Error: ', error);
    }
  };

  const requestCameraPermission = async () => {
    try {
      const permission =
        Platform.OS === 'android'
          ? PERMISSIONS.ANDROID.CAMERA
          : PERMISSIONS.IOS.CAMERA;

      const result = await request(permission, {
        title: 'App Camera Permission',
        message: 'App needs access to your camera',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      });

      if (result === RESULTS.GRANTED) {
        console.log('You can use the camera');
        setPicker(true);
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err, 'catch error camera picker');
    }
  };

  const onClose = () => {
    setPicker(false);
  };
  return {
    picker,
    image,
    onClose,
    cameraLaunch,
    galleryLaunch,
    requestCameraPermission,
  };
};

export default useImagePicker;
