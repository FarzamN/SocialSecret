import {style} from './style';
import React, {FC} from 'react';
import {MD3Colors} from 'react-native-paper';
import {KeyboardProps} from '../../Utils/interface';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import { Colors } from '../../Utils/Colors';
import { FONT_SIZES } from '../../Utils/responsive';

const Keyboard: FC<KeyboardProps> = ({
  onDone,
  visible,
  onDelete,
  onPressKey,
}) => {
  const renderKey = (value: number) => (
    <TouchableOpacity
      key={value}
      style={style.key}
      onPress={() => onPressKey(value)}>
      <Text style={style.keyText}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    visible && (
      <>
        <View style={style.KeyboardRow}>{[1, 2, 3].map(renderKey)}</View>
        <View style={style.KeyboardRow}>{[4, 5, 6].map(renderKey)}</View>
        <View style={style.KeyboardRow}>{[7, 8, 9].map(renderKey)}</View>
        <View style={style.KeyboardRow}>
          <TouchableOpacity
            style={[style.key, {backgroundColor: '#4A76FD'}]}
            onPress={onDone}>
            <Icon
              size={FONT_SIZES.HEADING}
              color={Colors.white}
              name="checkmark-done"
              type={IconType.Ionicons}
            />
          </TouchableOpacity>
          {renderKey(0)}
          <TouchableOpacity
            style={[style.key, {backgroundColor: MD3Colors.error50}]}
            onPress={onDelete}>
            <Icon
              size={FONT_SIZES.SUB_HEADING}
              name="delete"
              color={Colors.white}
              type={IconType.Feather}
            />
          </TouchableOpacity>
        </View>
      </>
    )
  );
};

export default Keyboard;
