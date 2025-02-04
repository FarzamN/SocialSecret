import {StyleSheet} from 'react-native';
import {Colors} from '../../Utils';
import {Font} from '../../Utils/font';

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
    fontSize: 12,
    fontWeight: '500',
  },
  ModalBtn: {
    flex: 1,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  SecCon: {
    paddingVertical: 15,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
  },
  tinyLogo: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  CrossBOx: {
    backgroundColor: Colors.Red,
    width: 25,
    height: 25,
    borderRadius: 100,
    alignItems: 'center',
    marginBottom: -10,
    zIndex: 9,
    aspectRatio: 1 / 1,
  },

  LottieView: {
    height: 150,
    alignSelf: 'center',
  },
  ModalText: {
    padding: 20,
    fontSize: 16,
    color: Colors.Ash,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ModalContainer: {
    width: '70%',
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.White,
    borderColor: Colors.DarkYellow,
  },

  // wallpaper modal start here
  wpBottomCont: {
    margin: 5,
    justifyContent: 'flex-end',
  },
  WPCont: {
    borderRadius: 25,
    flex: 0.37,
  },
  Line: {
    width: '40%',
    height: 7,
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 10,
  },
  loadText: {
    fontSize: 16,
    fontFamily: Font.font600Italic,
  },
});
