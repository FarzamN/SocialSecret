import React, {FC} from 'react';
import {useSelector} from 'react-redux';
import {Colors} from '../../Utils/Colors';
import {RootState} from '../../redux/store';
import {inboxHiddentype} from '../../Utils/type';
import {MD2LightTheme} from 'react-native-paper';
import { FONT_SIZES} from '../../Utils/responsive';
import {TouchableOpacity, View} from 'react-native';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import style from './style';
import {GlobalStyle, Space_Between} from '../../Utils/GlobalStyle';

const InboxHidden: FC<inboxHiddentype> = props => {
  const {onPress} = props;
  const isDark =
    useSelector((state: RootState) => state.themeMode.defTheme) === 'dark';

  return (
    <Space_Between style={style.indexHiddenMain}>
      <View />
      <TouchableOpacity
        onPress={onPress}
        style={[
          style.inboxHiddenCont,
          GlobalStyle.justify,
          {
            backgroundColor: isDark ? Colors.white : MD2LightTheme.colors.error,
          },
        ]}>
        <Icon
          name="delete"
          type={IconType.MaterialIcons}
          size={FONT_SIZES.SUB_HEADING}
          color={
            isDark ? MD2LightTheme.colors.error : Colors.white
          }
        />
      </TouchableOpacity>
    </Space_Between>
  );
};

export default InboxHidden;
