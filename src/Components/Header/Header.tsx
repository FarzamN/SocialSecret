import {style} from './style';
import React, {FC} from 'react';
import {Divider, Sub} from '..';
import {Colors} from '../../Utils';
import {useSelector} from 'react-redux';
import {HeaderType} from '../../Utils/type';
import {width} from '../../Utils/Constants';
import {RootState} from '../../redux/store';
import {View, TouchableOpacity} from 'react-native';
import {GlobalStyle, Row} from '../../Utils/GlobalStyle';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {DrawerActions, useNavigation} from '@react-navigation/native';

const Header: FC<HeaderType> = props => {
  const {
    gap,
    label,
    noBack,
    isMenu,
    IconName,
    type,
    double,
    isChat,
    searchBar,
    onSearch,
    onChatPress,
  } = props;
  const {goBack} = useNavigation();
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  const dark =
    useSelector((state: RootState) => state.themeMode.defTheme) === 'dark';
  return (
    <>
      <View
        style={[
          GlobalStyle.PaddingHor,
          GlobalStyle.Space_Between,
          style.HeaderContainer,
        ]}>
        {!noBack && (
          <TouchableOpacity
            style={[
              GlobalStyle.justify,
              style.BackButton,
              {
                backgroundColor: Colors.White,
                borderColor: dark ? Colors.Black : Colors.LightYellow,
              },
            ]}
            onPress={() => goBack()}>
            <Icon
              name="chevron-left"
              type={IconType.Entypo}
              color={dark ? Colors.Black : Colors.LightYellow}
            />
          </TouchableOpacity>
        )}
        <View style={GlobalStyle.row}>
          {noBack && (
            <Icon
              size={20}
              type={type}
              name={`${IconName}`}
              style={{marginRight: 10}}
              color={dark ? Colors.White : Colors.Black}
            />
          )}

          <Sub text={label} style={style.label} />
        </View>
        {gap && <View style={style.gap} />}

        {double && (
          <Row>
            {isChat && (
              <TouchableOpacity onPress={onChatPress}>
                <Icon
                  size={23}
                  name={'chat'}
                  type={IconType.Entypo}
                  color={dark ? Colors.White : Colors.Black}
                />
              </TouchableOpacity>
            )}
            {isMenu && (
              <TouchableOpacity onPress={() => openDrawer()}>
                <Icon
                  size={23}
                  name={'menu'}
                  type={IconType.Entypo}
                  style={{marginLeft: 10}}
                  color={dark ? Colors.White : Colors.Black}
                />
              </TouchableOpacity>
            )}
          </Row>
        )}

        {searchBar && (
          <TouchableOpacity onPress={onSearch}>
            <Icon
              size={23}
              name={'search'}
              type={IconType.Ionicons}
              color={dark ? Colors.White : Colors.Black}
            />
          </TouchableOpacity>
        )}
      </View>
      <Divider style={{width}} />
    </>
  );
};

export default Header;
