import {TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {SPCardType} from '../../Utils/type';
import {style} from './style';
import FullImage from '../Helper/FullImage';
import Sub from '../Texts/Sub';

const SingerProfileCard: FC<SPCardType> = ({data, onPress}) => {
  const {title, image} = data;
  return (
    <TouchableOpacity onPress={onPress} style={style.SingerProfileContainer}>
      <FullImage
        radius={100}
        source={{uri: image}}
        style={style.SingerProfileDP}
      />
      <Sub text={title} />
    </TouchableOpacity>
  );
};

export default SingerProfileCard;
