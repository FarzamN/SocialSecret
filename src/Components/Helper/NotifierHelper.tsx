import {Notifier} from 'react-native-notifier';
import CustomToast from './customToast';

export const showNotification = (type,title, message) => {
  Notifier.showNotification({
    title,
    description: message,
    Component: CustomToast,
    componentProps: {
        type,
      title,
      message,
    },
    duration: 3000,
  });
};
