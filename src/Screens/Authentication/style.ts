import {StyleSheet} from 'react-native';
import { Colors } from '../../Utils/Colors';
import responsive, { FONT_SIZES } from '../../Utils/responsive';
import { Font } from '../../Utils/font';

export const style = StyleSheet.create({
  Overboard_Box: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    paddingTop: responsive.space(20),
  },

  codeFieldRoot: {
    marginVertical: responsive.space(10),
    justifyContent: 'space-evenly',
  },
  cell: {
    fontSize: FONT_SIZES.SUB_HEADING,
    color: Colors.white,
    fontWeight: 'bold',
  },
  CellBox: {
    borderRadius: responsive.borderRadius(10),
    backgroundColor: Colors.ThemeGrey,
    width: responsive.width(65),
    height: responsive.height(65),
    justifyContent: 'center',
    alignItems: 'center',
  },

  resendText: {fontFamily: Font.font600},
});
