import {android, iOS} from '../Utils/Constants';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';

const useNotificationPermission = () => {
  const requestNotificationPermission = async () => {
    if (iOS) {
      const status = await request(PERMISSIONS.IOS.REMINDERS);
      if (status === RESULTS.GRANTED) {
        console.log('Notification permission granted');
      } else {
        console.log('Notification permission denied');
      }
    } else if (android) {
      const status = await request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);
      if (status === RESULTS.GRANTED) {
        console.log('Notification permission granted');
      } else {
        console.log('Notification permission denied');
      }
    }
  };
  return {
    requestNotificationPermission,
  };
};

export default useNotificationPermission;
