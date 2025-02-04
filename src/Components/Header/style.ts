import {StatusBar, StyleSheet} from 'react-native';
import {Font} from '../../Utils/font';

export const style = StyleSheet.create({
  BackButton: {
    width: 35,
    borderWidth: 1,
    borderRadius: 5,
    aspectRatio: 1 / 1,
  },

  // !Header style is here
  HeaderContainer: {
    height: 65,
  },
  gap: {
    width: 40,
  },
  label: {
    fontSize: 20,
    fontFamily: Font.font800Italic,
  },

  // WP style is here
  WPBackCont: {
    width: 40,
    aspectRatio: 1 / 1,
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight + 10,
    marginLeft: 10,
  },
});
