import React, {FC} from 'react';
import {styles} from './style';
import {Modal} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {FullImage} from '..';
import {loaderType} from '../../Utils/type';
import {RootState} from '../../redux/store';
import {darkTheme, lightTheme} from '../../Utils/Colors';
import {View, Text, ActivityIndicator, Image} from 'react-native';

const Loader: FC<loaderType> = props => {
  const {visible, isError, msg,onClose} = props;
  const dark =
    useSelector((state: RootState) => state.themeMode.defTheme) === 'dark';
  const color = dark ? darkTheme.yellow : lightTheme.yellow;

  return (
    <Modal visible={visible}  onDismiss={onClose}>
      <View
        style={[
          styles.ModalContainer,
          {backgroundColor: dark ? '#1f1f1f' : '#FCFCFC', borderWidth: 0.8},
        ]}>
        {isError ? (
          <FullImage
          style={{}}
          resizeMode="contain"
            ImageStyle={styles.LottieView}
            source={require('../../Assets/Images/wrong.png')}
          />
        ) : (
          <ActivityIndicator size={'large'} color={color} />
        )}
        <Text
          style={[
            styles.ModalText,
            {
              color: dark ? darkTheme.text : lightTheme.text,
            },
          ]}>
          {isError ? msg : 'Please Wait...'}
        </Text>
      </View>
    </Modal>
  );
};

export default Loader;
