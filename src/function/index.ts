/*
import notifee, {AndroidStyle} from '@notifee/react-native';
export const onDisplayNotification = async (data: any) => {
  console.log(data);
  await notifee.requestPermission();

  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  await notifee.displayNotification({
    title: data.notification.title,
    body: data.notification.body,
    android: {
      channelId,
      largeIcon:
        'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      pressAction: {
        id: 'default',
      },
      actions: [
        {
          title: 'Reply',
          icon: 'https://images.unsplash.com/photo-1485470733090-0aae1788d5af?q=80&w=1834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          pressAction: {
            id: 'reply',
          },
          input: true, // enable free text input
          //   input: {
          //     allowFreeFormInput: true, // set to false
          //     choices: ['Yes', 'No', 'Maybe'],
          //     placeholder: 'Reply to Sarah...',
          //   },
        },
      ],
      actions: [
        {
          title: 'reply',
          icon: 'https://images.unsplash.com/photo-1485470733090-0aae1788d5af?q=80&w=1834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          pressAction: {
            id: 'open-chat',
            launchActivity: 'default',
          },
          input: true,
        },
      ],

      style: {
        type: AndroidStyle.BIGPICTURE,
        picture:
          'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    },
  });
};
 */

// export const catchFun = () => {
//   Toast.show({
//     type: 'error',
//     text1: 'Error',
//     text2: 'Something went wrong',
//   });
// };
