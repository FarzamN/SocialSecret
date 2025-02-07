import {StyleSheet} from 'react-native';
import {Font} from '../../../Utils/font';
import { FONT_SIZES } from '../../../Utils/responsive';

export const style = StyleSheet.create({
  label: {
    fontSize: FONT_SIZES.SUB_HEADING,
    fontFamily: Font.font800Italic,
  },
});
