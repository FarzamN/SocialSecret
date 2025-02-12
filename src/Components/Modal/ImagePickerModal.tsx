import React, {FC} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import {Modal} from 'react-native-paper';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {ImagePicType} from '../../Utils/type';
import {styles} from './style';
import {RootState} from '../../redux/store';
import {useSelector} from 'react-redux';
import {Colors} from '../../Utils/Colors';
import {FONT_SIZES} from '../../Utils/responsive';

const ImagePickerModal: FC<ImagePicType> = props => {
  const {isVisible, onClose, PressPicture, PressCamera} = props;
  const dark =
    useSelector((state: RootState) => state.themeMode.defTheme) === 'dark';
  const color = dark ? Colors.white : Colors.blue;
  return (
    <Modal
      visible={isVisible}
      dismissable
      dismissableBackButton
      onDismiss={onClose}
      style={styles.ModalBotton}>
      <View style={styles.PickerContainer}>
        <TouchableOpacity onPress={onClose} style={styles.CrossBOx}>
          <Icon
            type={IconType.Entypo}
            name="cross"
            size={FONT_SIZES.HEADING}
            color={Colors.white}
          />
        </TouchableOpacity>

        <View
          style={[
            styles.SecCon,
            {
              backgroundColor: dark ? Colors.blue : Colors.white,
            },
          ]}>
          <TouchableOpacity onPress={PressPicture} style={styles.ModalBtn}>
            <Icon
              type={IconType.MaterialIcons}
              name="photo"
              size={FONT_SIZES.LARGE_TITLE}
              color={color}
            />
            <Text style={[styles.Text1, {color}]}>Upload picture</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={PressCamera} style={styles.ModalBtn}>
            <Icon
              type={IconType.Entypo}
              name="camera"
              size={FONT_SIZES.LARGE_TITLE}
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
