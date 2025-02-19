import {StyleSheet} from 'react-native';
import {Font} from '../../Utils/font';
import {Colors} from '../../Utils/Colors';
import responsive, {FONT_SIZES, width} from '../../Utils/responsive';

export default StyleSheet.create({
  Container: {
    width: '100%',
    marginTop: responsive.space(15),
  },
  InputStyles: {
    color: Colors.white,
    fontFamily: Font.font400Italic,
    fontSize: FONT_SIZES.BODY,
  },
});
