import {StyleSheet} from 'react-native';
import {Colors} from '../../Utils';

export const style = StyleSheet.create({
  Overboard_Box: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    paddingTop: 20,
  },

  codeFieldRoot: {
    marginVertical: 10,
    justifyContent: 'space-evenly',
  },
  cell: {
    fontSize: 20,
    color: Colors.White,
    fontWeight: 'bold',
  },
  CellBox: {
    borderRadius: 10,
    backgroundColor: Colors.ThemeGrey,
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },

  resendText: {fontWeight: '600'},
});
