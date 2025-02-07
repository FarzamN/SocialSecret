import {View, TextInput, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {GlobalStyle, Row} from '../../Utils/GlobalStyle';
import {style} from './style';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {SearchBarType} from '../../Utils/type';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import { Colors, darkTheme, lightTheme } from '../../Utils/Colors';
import { FONT_SIZES } from '../../Utils/responsive';

const SearchBar: FC<SearchBarType> = props => {
  const {onChange, value, onClose} = props;
  const Theme = useSelector((state: RootState) => state.themeMode.defTheme);
  const dark = Theme === 'dark';
  const color = dark ? Colors.white : Colors.blue;
  const PlaceholderColor = dark ? Colors.grey : darkTheme.grey;
  const cursorColor = dark ? lightTheme.yellow : darkTheme.yellow;

  return (
    <View
      style={[
        {borderColor: color},
        style.SearchContainer,
        GlobalStyle.Space_Between,
      ]}>
      <Row>
        <Icon type={IconType.Ionicons} name="search" size={FONT_SIZES.SUB_HEADING} color={color} />
        <TextInput
          autoFocus
          value={value}
          placeholder="Search"
          onChangeText={onChange}
          cursorColor={cursorColor}
          selectionColor={Colors.AYellow}
          style={[style.SearchInput, {color}]}
          placeholderTextColor={PlaceholderColor}
        />
      </Row>
      <TouchableOpacity onPress={onClose}>
        <Icon
          size={FONT_SIZES.SUB_HEADING}
          color={color}
          name="close-circle"
          type={IconType.Ionicons}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
