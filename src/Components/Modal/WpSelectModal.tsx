import {styles} from './style';
import React, {FC} from 'react';
import {View} from 'react-native';
import {Modal} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {WPSelectType} from '../../Utils/type';
import WPSelectCard from '../Card/WPSelectCard';
import {IconType} from 'react-native-dynamic-vector-icons';
import {ActivityIndicator} from 'react-native-paper';
import Sub from '../Texts/Sub';
import style from '../Texts/style';
import { Colors, darkTheme, lightTheme } from '../../Utils/Colors';
import responsive from '../../Utils/responsive';

const WpSelectModal: FC<WPSelectType> = props => {
  const {
    load,
    onHome,
    onLock,
    onBoth,
    visible,
    onClose,
    onContact,
    onWhatsApp,
  } = props;
  const Theme = useSelector((state: RootState) => state.themeMode.defTheme);
  const dark = Theme === 'dark';
  const yellowColor = dark ? darkTheme.yellow : lightTheme.yellow;
  const selectData = [
    {
      title: 'Home Screen',
      onPress: onHome,
      icon: 'home',
      type: IconType.Ionicons,
    },
    {
      title: 'Lock Screen',
      onPress: onLock,
      icon: 'lock',
      type: IconType.Entypo,
    },
    {
      title: 'Set to Both Screens',
      onPress: onBoth,
      icon: 'lock',
      type: IconType.Entypo,
    },
    {
      title: 'Contact Photo',
      onPress: onContact,
      icon: 'contacts',
      type: IconType.MaterialIcons,
    },
    {
      title: 'Whatsapp Profile Photo',
      onPress: onWhatsApp,
      icon: 'whatsapp',
      type: IconType.FontAwesome,
    },
  ];
  return (
    <Modal
      testID={'modal'}
      
      onSwipeComplete={onClose}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      style={styles.wpBottomCont}
      swipeDirection={'down'}
      isVisible={visible}>
      <View
        style={[
          styles.WPCont,
          {backgroundColor: dark ? Colors.black : Colors.white},
        ]}>
        <View style={[styles.Line, {backgroundColor: yellowColor}]} />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          {load ? (
            <>
              <ActivityIndicator color={yellowColor} size="large" />
              <Sub
                text="Loading..."
                center
                marginTop={responsive.space(10)}
                style={[styles.loadText, {color: yellowColor}]}
              />
            </>
          ) : (
            selectData.map(i => (
              <WPSelectCard
                key={i.title}
                title={i.title}
                onPress={i.onPress}
                iconName={i.icon}
                type={i.type}
              />
            ))
          )}
        </View>
      </View>
    </Modal>
  );
};

export default WpSelectModal;
