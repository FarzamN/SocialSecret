import {StyleSheet} from 'react-native';
import {width} from '../../../Utils/Constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  masonryList: {
    padding: 10,
  },
  imageContainer: {
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
    aspectRatio: 1,
  },
  SwipeCont: {
    height: 200,
    marginTop: 5,
    alignSelf: 'center',
  },
  SwipeFlatListCont: {
    width: width - 10,
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 5,
  },

  // Apply Image styles
  ApplyImageButton: {
    right: 10,
    bottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
  },
});
