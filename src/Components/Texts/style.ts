import {StyleSheet} from 'react-native';
import {Font} from '../../Utils/font';
import { FONT_SIZES } from '../../Utils/responsive';
export default StyleSheet.create({
  Heading: {
    fontSize: FONT_SIZES.SUB_HEADING,
    fontFamily: Font.font600,
  },
  Sub: {
    fontSize: FONT_SIZES.BODY,
    fontFamily: Font.font400,
  },
});
