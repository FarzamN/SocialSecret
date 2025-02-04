import {StyleSheet} from 'react-native';
import {Colors, Constants} from '../../Utils';
import {Font} from '../../Utils/font';

export default StyleSheet.create({
  Container: {
    width: Constants.width - 20,
    marginTop: 10,
  },
  InputStyles: {
    width: Constants.width - 20,
    backgroundColor: Colors.Non,
    alignSelf: 'center',
    color: Colors.White,
    fontFamily: Font.font400Italic,
    fontSize: 16,
    borderRadius: 15,
  },
});
