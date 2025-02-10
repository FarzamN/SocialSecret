import {StatusBar, StyleSheet} from 'react-native';
import {Font} from '../../Utils/font';
import responsive, { BORDER_RADIUS, FONT_SIZES } from '../../Utils/responsive';

export const style = StyleSheet.create({
  BackButton: {
    width: responsive.width(35),
    borderWidth: 1,
    borderRadius: BORDER_RADIUS.SMALL,
    aspectRatio: 1 / 1,
  },

  // !Header style is here
  HeaderContainer: {
    height: responsive.height(65),
  },
  gap: {
    width: responsive.width(40),
  },
  label: {
    fontSize: FONT_SIZES.BODY,
    fontFamily: Font.font800Italic,
  },

  // WP style is here
  WPBackCont: {
    width: responsive.width(40),
    aspectRatio: 1 / 1,
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight + 10,
    marginLeft: responsive.space(10),
  },
});
