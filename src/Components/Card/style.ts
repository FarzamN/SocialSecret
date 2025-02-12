import {Font} from '../../Utils/font';
import {StyleSheet} from 'react-native';
import responsive, { BORDER_RADIUS, FONT_SIZES, HEIGHT_SIZES, SPACING } from '../../Utils/responsive';

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

  // ---------------- Inbox card
  inboxDP: {
    overflow:'hidden',
    width: responsive.width(50),
    height: responsive.width(50),
    borderRadius: BORDER_RADIUS.CIRCLE,

  },
  inboxCardCont: {
    marginBottom: SPACING.DEFAULT,
    height: responsive.height(75),
    marginHorizontal:SPACING.SMALL,
    paddingHorizontal:SPACING.SMALL,
    borderRadius: BORDER_RADIUS.SMALL
  },
  inboxTitle: {
    fontSize: FONT_SIZES.BODY,
    
  },
  inboxLastMsg: {
    fontSize: FONT_SIZES.SMALL

  },inboxTime: {
    fontSize: FONT_SIZES.SMALL

  }
});
