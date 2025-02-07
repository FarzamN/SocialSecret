import {StyleSheet} from 'react-native';
import responsive, { FONT_SIZES, HEIGHT_SIZES, width } from '../../Utils/responsive';
import { Font } from '../../Utils/font';

export const style = StyleSheet.create({
  RadioContainer: {
    height: HEIGHT_SIZES.DEFAULT,
  },
  Heading: {
    fontSize: FONT_SIZES.BODY,
    paddingRight: responsive.borderRadius(10),
    fontFamily: Font.font400,
  },
  // !--------- Wallpaper Switch styles
  WPSwitchContainer: {
    width: width / 3,
    height: responsive.height(37),
    borderRadius: responsive.borderRadius(5),
    borderWidth: 1,
  },
  SwitchCont: {
    paddingHorizontal: responsive.space(14),
    borderRadius: responsive.borderRadius(7),
    marginTop: responsive.space(5),
    height: HEIGHT_SIZES.DEFAULT,
    marginHorizontal: responsive.space(5),
    marginBottom: responsive.space(10),
  },
});
