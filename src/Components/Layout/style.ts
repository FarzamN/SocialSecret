import {StyleSheet} from 'react-native';
import {Constants} from '../../Utils';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

const {create, absoluteFillObject} = StyleSheet;
export default create({
  Center_Container: {flex: 1, justifyContent: 'space-between'},
  overlay: {
    ...absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },

  Image_Box: {
    width: Constants.width / 2,
    aspectRatio: 1 / 1,
    alignSelf: 'center',
  },
});
