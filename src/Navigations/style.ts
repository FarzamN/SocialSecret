import responsive, {
  FONT_SIZES,
  HEIGHT_SIZES,
  BORDER_RADIUS,
} from '../Utils/responsive';
import {Font} from '../Utils/font';
import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  IconBox: {
    width: HEIGHT_SIZES.SMALL,
    height: responsive.height(21),
    borderRadius: BORDER_RADIUS.CIRCLE,
  },
  Text: {
    fontSize: FONT_SIZES.SMALL,
    textTransform: 'capitalize',
    fontFamily: Font.font500Italic,
    paddingBottom: responsive.space(5),
  },

  // Container
  ImageBox: {
    width: '100%',
    height: responsive.height(200),
    borderRadius: responsive.borderRadius(10),
  },

  AvatarBox: {
    marginTop: responsive.space(-35),
    marginLeft: responsive.space(10),
  },
  TextBox: {marginLeft: responsive.space(10), maxWidth: '60%'},
});
