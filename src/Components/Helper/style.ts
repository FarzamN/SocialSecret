import {StyleSheet} from 'react-native';
import {Font} from '../../Utils/font';
import { Colors } from '../../Utils/Colors';
import responsive, { BORDER_RADIUS, FONT_SIZES, width } from '../../Utils/responsive';

export const style = StyleSheet.create({
  Divider: {
    width: width  - 20,
    height: 1,
    borderRadius: BORDER_RADIUS.CIRCLE,
    backgroundColor: 'grey',
  },
  helperText: {
    color: 'red',
    fontSize: FONT_SIZES.BODY,
    marginTop: responsive.space(7),
    fontFamily: Font.font500Italic,
  },

  ImageContainer: {
    width: responsive.width(100),
    aspectRatio: 1 / 1,
    borderRadius: BORDER_RADIUS.CIRCLE,
    alignSelf: 'center',
  },
  IconBox: {
    position: 'absolute',
    backgroundColor: Colors.white,
    borderRadius: BORDER_RADIUS.CIRCLE,
    bottom: responsive.space(5),
    right: responsive.space(15),
    padding: responsive.space(4),
  },

  KeyboardRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: responsive.space(10),
  },
  key: {
    backgroundColor: Colors.white,
    width: '18%',
    borderRadius: responsive.borderRadius(10),
    aspectRatio: 1 / 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyText: {
    fontSize: FONT_SIZES.SUB_HEADING,
    fontFamily: Font.font500,
    color: Colors.blue,
  },

  // !--------- search bar styles

  SearchContainer: {
    paddingHorizontal: responsive.space(10),
    borderBottomWidth: 1,
    height: responsive.height(65),
  },
  SearchInput: {
    fontSize: FONT_SIZES.BODY,
    fontFamily: Font.font500,
    maxWidth: '89%',
  },


  // !--------- Custom Toast styles

  toastCont:{
    borderWidth: 1,
    height: 70,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  ToastText1: {
    fontSize: FONT_SIZES.BODY,
    fontFamily: Font.font600,
  },
  ToastText2: {
    fontSize: FONT_SIZES.SMALL,
    fontFamily: Font.font500,
  },
  ToastIconBox: {
    width:22,
    aspectRatio:1/1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:5,
    marginRight:12,
  },
});
