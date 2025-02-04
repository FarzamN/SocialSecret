import {StyleSheet} from 'react-native';
import {width} from '../../Utils/Constants';
import {Colors} from '../../Utils';

export const style = StyleSheet.create({
  RadioContainer: {
    height: 45,
  },
  Heading: {
    fontSize: 14,
    paddingRight: 10,
    fontWeight: '400',
  },
  // !--------- Wallpaper Switch styles
  WPSwitchContainer: {
    width: width / 3,
    height: 37,
    borderRadius: 5,
    borderWidth: 1,
  },
  SwitchCont: {
    paddingHorizontal: 14,
    borderRadius: 7,
    marginTop: 5,
    height: 45,
    marginHorizontal: 5,
    marginBottom: 10,
  },
});
