import {StyleSheet} from 'react-native';
import {Font} from '../../Utils/font';
import { Colors } from '../../Utils/Colors';
import responsive, { BORDER_RADIUS, FONT_SIZES, HEIGHT_SIZES, SPACING } from '../../Utils/responsive';

export default StyleSheet.create({
  containerStyle: {
    marginTop: responsive.space(10),
    alignSelf: 'center',
  },
  loading: {
    fontSize: FONT_SIZES.BODY,
    marginLeft: responsive.space(10),
    color: Colors.white,
    fontFamily: Font.font500Italic,
  },
  title: {
    fontSize: FONT_SIZES.BODY,
    textTransform: 'capitalize',
    fontFamily: Font.font600Italic,
  },

  // Wallpaper Button style
  WPContainer: {
    backgroundColor: Colors.white,
    borderRadius: BORDER_RADIUS.MEDIUM,
    borderWidth: 1,
    height: HEIGHT_SIZES.DEFAULT,
  },
  text: {color: '#000', fontSize: FONT_SIZES.BODY, fontFamily: Font.font600Italic},

  indexHiddenMain:{
    marginHorizontal:SPACING.DEFAULT,
    height: responsive.height(75),

  },
  inboxHiddenCont: {
    width: responsive.height(30),
    aspectRatio:1/1,
    borderRadius: BORDER_RADIUS.CIRCLE,

  }
});
