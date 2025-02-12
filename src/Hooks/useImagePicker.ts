import {useState} from 'react';
import {android} from '../Utils/Constants';
import {openCamera, openPicker} from 'react-native-image-crop-picker';
import {
  request,
  check,
  PERMISSIONS,
  RESULTS,
  openSettings,
} from 'react-native-permissions';

const useImagePicker = () => {
  const [image, setImage] = useState({
    fileName: '',
    uri: '',
    type: '',
  });

  const [picker, setPicker] = useState<boolean>(false);

  const galleryLaunch = async () => {
    console.log("gallery launch")
    try {
      const response = await openPicker({
        mediaType: 'photo',
        cropping: true,
      });
      if (!response) {
        console.log('User cancelled image picker');
      } else {
        setImage({
          fileName: response.path.split('/').pop() || '',
          uri: response.path,
          type: response.mime,
        });
        setPicker(false);
      }
    } catch (error) {
      console.log('ImagePicker Error: ', error);
    }
  };

  const cameraLaunch = async () => {
    console.log("camera launch")

    try {
      const response = await openCamera({
        mediaType: 'photo',
        cropping: true,
      });
      if (!response) {
        console.log('User cancelled image picker');
      } else {
        setImage({
          fileName: response.path.split('/').pop() || '',
          uri: response.path,
          type: response.mime,
        });
        setPicker(false);
      }
    } catch (error) {
      console.log('ImagePicker Error: ', error);
    }
  };

  const requestPermission = async (permissionType: any, onSuccess: any) => {
    try {
      const result = await check(permissionType);
      console.log({result})
      if (result === RESULTS.GRANTED) {
        console.log('RESULTS.GRANTED');
        onSuccess();
      } else if (result === RESULTS.DENIED) {
        console.log('RESULTS.DENIED');

        const newResult = await request(permissionType);
        if (newResult === RESULTS.GRANTED) {
          onSuccess();
        } else {
          console.log('Permission denied');
        }
      } else if (result === RESULTS.BLOCKED || result === RESULTS.LIMITED) {
        console.log('Permission permanently denied. Opening settings...');
        openSettings();
      }
    } catch (err) {
      console.warn('Error requesting permission:', err);
    }
  };

  const requestCamera = () => {
    const permission = android
      ? PERMISSIONS.ANDROID.CAMERA
      : PERMISSIONS.IOS.CAMERA;

    requestPermission(permission, cameraLaunch);
  };

  const requestGallery = () => {
    
    const permission = android
    ? PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
    : PERMISSIONS.IOS.PHOTO_LIBRARY;

    requestPermission(permission, galleryLaunch);
  };

  const onClose = () => setPicker(pre => !pre);
  const onOpen = () => setPicker(true);

  return {
    image,
    picker,
    onOpen,
    onClose,
    requestCamera,
    requestGallery,
  };
};

export default useImagePicker;
