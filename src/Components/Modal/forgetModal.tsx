import {styles} from './style';
import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {Modal} from 'react-native-paper';
import {CustomButton, Divider} from '..';
import {RootState} from '../../redux/store';
import {forgetType} from '../../Utils/type';
import {GlobalStyle} from '../../Utils/GlobalStyle';
import {darkTheme, lightTheme} from '../../Utils/Colors';

const ForgetModal: FC<forgetType> = props => {
  const {visible, onPhone, onEmail, onClose} = props;
  const dark =
    useSelector((state: RootState) => state.themeMode.defTheme) === 'dark';
  const color = dark ? darkTheme.yellow : lightTheme.yellow;

  return (
    <Modal
      visible={visible}
      style={{justifyContent: 'flex-end'}}
      onDismiss={onClose}>
      <View
        style={[
          styles.forgetCont,
          {
            backgroundColor: dark
              ? darkTheme.background
              : lightTheme.background,
          },
        ]}>
        <Divider style={styles.divider} />
        <Text
          style={[
            styles.ModalText,
            {
              marginBottom: 10,
              color: dark ? darkTheme.text : lightTheme.text,
            },
          ]}>
          Please select Forget type
        </Text>
        <View style={GlobalStyle.Padding}>
          <CustomButton title="Email" onPress={onEmail} />
          <CustomButton title="Phone number" onPress={onPhone} />
        </View>
      </View>
    </Modal>
  );
};

export default ForgetModal;
