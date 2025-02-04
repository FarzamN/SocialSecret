import {useState} from 'react';
import {Platform} from 'react-native';
import {openPicker, openCamera} from 'react-native-image-crop-picker';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';

const useImagePicker = () => {
  const [image, setImage] = useState({
    fileName: '',
    uri: '',
    type: '',
  });

  const [picker, setPicker] = useState<boolean>(false);

  const galleryLaunch = async () => {
    try {
      const image = await openPicker({
        mediaType: 'photo',
        cropping: true,
      });
      if (!image) {
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

  const cameraLaunch = async () => {
    try {
      const image = await openCamera({
        mediaType: 'photo',
        cropping: true,
      });
      if (!image) {
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
