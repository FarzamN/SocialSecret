import App from './App';
import * as React from 'react';
import {Provider} from 'react-redux';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {fontConfig} from './src/Utils/Data';
import {persistor, store} from './src/redux/store';
// import messaging from '@react-native-firebase/messaging';
import {PersistGate} from 'redux-persist/integration/react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {configureFonts, MD2LightTheme, PaperProvider} from 'react-native-paper';

const Root = () => {
  // messaging().setBackgroundMessageHandler(async remoteMessage => {
  //   console.log('Message handled in the background!', remoteMessage);
  // });
  // messaging().getInitialNotification(async remoteMessage => {
  //   console.log('Message handled in the killmode!', remoteMessage);
  // });

  const theme = {
    ...MD2LightTheme,
    fonts: configureFonts({config: fontConfig, isV3: false}),
  };
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={{flex: 1}}>
          <PaperProvider theme={theme}>
            
            <App />
          </PaperProvider>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
