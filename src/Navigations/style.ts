import {StyleSheet} from 'react-native';
import {Font} from '../Utils/font';

export const style = StyleSheet.create({
  IconBox: {
    borderRadius: 50,
    paddingVertical: 1.3,
    paddingHorizontal: 13,
  },
  Text: {
    fontSize: 13,
    textTransform: 'capitalize',
    paddingBottom: 5,
    fontFamily: Font.font500Italic,
  },

  // Container
  ImageBox: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },

  AvatarBox: {marginTop: -35, marginLeft: 10},
  TextBox: {marginLeft: 10},
});
