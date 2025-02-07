import {StyleSheet} from 'react-native';
import {Font} from '../../Utils/font';
import { Colors } from '../../Utils/Colors';
import responsive, { FONT_SIZES } from '../../Utils/responsive';

export default StyleSheet.create({
  Container: {
    width: "97%",
    marginTop: responsive.space(10),
  },
  InputStyles: {
   width: "97%",

//    width: Constants.width - 20,
    backgroundColor: Colors.Non,
    alignSelf: 'center',
    color: Colors.white,
    fontFamily: Font.font400Italic,
    fontSize: FONT_SIZES.BODY,
    borderRadius: responsive.borderRadius(15),
  },
});
