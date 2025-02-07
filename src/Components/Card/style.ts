import {Font} from '../../Utils/font';
import {StyleSheet} from 'react-native';
import responsive, { FONT_SIZES, HEIGHT_SIZES } from '../../Utils/responsive';

export const style = StyleSheet.create({
  scContainer: {
    height: HEIGHT_SIZES.DEFAULT,
  },
  scTitle: {
    fontSize: FONT_SIZES.BODY,
    fontFamily: Font.font500Italic,
  },

  // ------------------------------------
  WallpaperCardContainer: {
    marginBottom: responsive.space(7),
  },

  // ---------------- Singer Profile
  SingerProfileContainer: {
    width: responsive.width(100),
    height: responsive.width(100),
  },
});
