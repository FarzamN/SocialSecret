import React, {FC} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import Modal from 'react-native-modal';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {Colors} from '../../Utils';
import {ImagePicType} from '../../Utils/type';
import {styles} from './style';
import {RootState} from '../../redux/store';
import {useSelector} from 'react-redux';

const ImagePickerModal: FC<ImagePicType> = props => {
  const {isVisible, onClose, PressPicture, PressCamera} = props;
  const dark =
    useSelector((state: RootState) => state.themeMode.defTheme) === 'dark';
  const color = dark ? Colors.White : Colors.Blue;
  return (
    <Modal
      testID={'modal'}
      backdropOpacity={0.3}
      onBackdropPress={onClose}
      isVisible={isVisible}
      onBackButtonPress={onClose}
      statusBarTranslucent
      style={styles.ModalBotton}>
      <View style={styles.PickerContainer}>
        <TouchableOpacity onPress={onClose} style={styles.CrossBOx}>
          <Icon
            type={IconType.Entypo}
            name="cross"
            size={25}
            color={Colors.White}
          />
        </TouchableOpacity>

        <View
          style={[
            styles.SecCon,
            {
              backgroundColor: dark ? Colors.Blue : Colors.White,
            },
          ]}>
          <TouchableOpacity onPress={PressPicture} style={styles.ModalBtn}>
            <Icon
              type={IconType.MaterialIcons}
              name="photo"
              size={32}
              color={color}
            />
            <Text style={[styles.Text1, {color}]}>Upload picture</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={PressCamera} style={styles.ModalBtn}>
            <Icon
              type={IconType.Entypo}
              name="camera"
              size={30}
              color={color}
            />
            <Text style={[styles.Text1, {color}]}>Take a picture</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ImagePickerModal;
