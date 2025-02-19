import {StyleSheet} from 'react-native';
import {Font} from '../../Utils/font';
import {Colors, darkTheme, lightTheme} from '../../Utils/Colors';
import responsive, {
  BORDER_RADIUS,
  FONT_SIZES,
  HEIGHT_SIZES,
  SPACING,
  width,
} from '../../Utils/responsive';

export const styles = StyleSheet.create({
  ModalBotton: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  PickerContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  Text1: {
    fontSize: FONT_SIZES.SMALL,
    fontFamily: Font.font500,
  },
  ModalBtn: {
    flex: 1,
    margin: responsive.space(2),
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: responsive.borderRadius(15),
    borderTopRightRadius: responsive.borderRadius(15),
  },
  SecCon: {
    paddingVertical: responsive.space(15),
    width: '100%',
    borderTopLeftRadius: responsive.borderRadius(10),
    borderTopRightRadius: responsive.borderRadius(10),
    flexDirection: 'row',
  },
  tinyLogo: {
    height: HEIGHT_SIZES.DEFAULT,
    width: HEIGHT_SIZES.DEFAULT,
    resizeMode: 'contain',
  },
  CrossBOx: {
    backgroundColor: lightTheme.error,
    width: HEIGHT_SIZES.XSMALL,
    height: HEIGHT_SIZES.XSMALL,
    borderRadius: BORDER_RADIUS.CIRCLE,
    alignItems: 'center',
    marginBottom: responsive.space(-10),
    zIndex: 9,
    aspectRatio: 1 / 1,
  },

  LottieView: {
    height: responsive.height(150),
    alignSelf: 'center',
    marginBottom: SPACING.DEFAULT,
  },
  divider: {
    width: width / 5,
    height: 5,
    alignSelf: 'center',
    marginBottom: 10,
  },
  forgetCont: {borderRadius: 20, paddingVertical: 20},
  ModalText: {
    fontSize: FONT_SIZES.BODY,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ModalContainer: {
    width: '70%',
    borderRadius: BORDER_RADIUS.LARGE,
    alignSelf: 'center',
    padding: SPACING.DEFAULT,
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderColor: darkTheme.yellow,
  },

  // wallpaper modal start here
  wpBottomCont: {
    margin: responsive.space(5),
    justifyContent: 'flex-end',
  },
  WPCont: {
    borderRadius: responsive.borderRadius(25),
    flex: 0.37,
  },
  Line: {
    width: '40%',
    height: responsive.height(7),
    borderRadius: responsive.borderRadius(10),
    alignSelf: 'center',
    marginVertical: responsive.space(10),
  },
  loadText: {
    fontSize: FONT_SIZES.BODY,
    fontFamily: Font.font600Italic,
  },
});
