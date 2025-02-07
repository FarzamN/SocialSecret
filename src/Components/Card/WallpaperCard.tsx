import {style} from './style';
import React, {FC} from 'react';
import {WPCardType} from '../../Utils/type';
import FullImage from '../Helper/FullImage';
import {TouchableOpacity} from 'react-native';
import * as Anime from 'react-native-animatable';
import { width } from '../../Utils/responsive';

const WallpaperCard: FC<WPCardType> = ({data, onPress}) => {
  const {source} = data;
  const rand = Math.random() < 0.5;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={style.WallpaperCardContainer}>
      <Anime.View animation="fadeIn" duration={rand ? 1000 : 1500} delay={500}>
        <FullImage
          radius={10}
          resizeMode="cover"
          source={{uri: source}}
          style={{height: rand ? 150 : 200, width: width / 2.1}}
        />
      </Anime.View>
    </TouchableOpacity>
  );
};

export default WallpaperCard;
