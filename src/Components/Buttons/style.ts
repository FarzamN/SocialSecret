import {StyleSheet} from 'react-native';
import {Colors} from '../../Utils';
import {Font} from '../../Utils/font';

export default StyleSheet.create({
  containerStyle: {
    marginTop: 10,
    alignSelf: 'center',
  },
  loading: {
    fontSize: 16,
    marginLeft: 10,
    color: Colors.White,
    fontFamily: Font.font500Italic,
  },
  title: {
    fontSize: 18,
    textTransform: 'capitalize',
    fontFamily: Font.font600Italic,
  },

  // Wallpaper Button style
  WPContainer: {
    backgroundColor: Colors.White,
    borderRadius: 10,
    borderWidth: 1,
    height: 45,
  },
  text: {color: '#000', fontSize: 16, fontFamily: Font.font600Italic},
});
