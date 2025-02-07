import {StyleSheet} from 'react-native';
import responsive, { width } from '../../../Utils/responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  masonryList: {
    padding: responsive.space(10),
  },
  imageContainer: {
    margin: responsive.space(5),
    borderRadius: responsive.borderRadius(10),
    overflow: 'hidden',
  },
  image: {
    width: responsive.width(100),
    height: responsive.height(100),
    aspectRatio: 1,
  },
  SwipeCont: {
    height: responsive.height(200),
    marginTop: responsive.space(5),
    alignSelf: 'center',
  },
  SwipeFlatListCont: {
    width: width - 10,
    justifyContent: 'center',
    borderRadius: responsive.borderRadius(10),
    marginHorizontal: responsive.space(5),
  },

  // Apply Image styles
  ApplyImageButton: {
    right: responsive.space(10),
    bottom: responsive.space(10),
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
  },
});
