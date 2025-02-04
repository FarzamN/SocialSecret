import {StyleSheet} from 'react-native';
import {Colors, Constants} from '../../Utils';
import {Font} from '../../Utils/font';

export const style = StyleSheet.create({
  Divider: {
    width: Constants.width - 20,
    height: 1,
    borderRadius: 100,
    backgroundColor: 'grey',
  },
  helperText: {
    color: 'red',
    fontSize: 15,
    marginTop: 7,
    fontFamily: Font.font500Italic,
  },

  ImageContainer: {
    width: 150,
    aspectRatio: 1 / 1,
    borderRadius: 100,
    alignSelf: 'center',
  },
  IconBox: {
    position: 'absolute',
    backgroundColor: Colors.White,
    borderRadius: 100,
    bottom: 5,
    right: 15,
    padding: 4,
  },

  KeyboardRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  key: {
    backgroundColor: Colors.White,
    width: '18%',
    borderRadius: 10,
    aspectRatio: 1 / 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.Blue,
  },

  // !--------- search bar styles

  SearchContainer: {
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    height: 65,
  },
  SearchInput: {
    fontSize: 15,
    fontFamily: Font.font500,
    maxWidth: '89%',
  },
});
