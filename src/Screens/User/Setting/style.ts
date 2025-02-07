import {StyleSheet} from 'react-native';
import responsive, { FONT_SIZES } from '../../../Utils/responsive';

export const style = StyleSheet.create({
  IconCenter: {alignSelf: 'center', marginTop: responsive.space(20)},
  SubHeading: {marginTop: responsive.space(20), fontSize: FONT_SIZES.BODY, fontWeight: '500'},
});
