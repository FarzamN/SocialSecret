import {style} from './style';
import React, {FC} from 'react';
import {Divider, Sub} from '..';
import {useSelector} from 'react-redux';
import {HeaderType} from '../../Utils/type';
import responsive, {width} from '../../Utils/responsive';
import {RootState} from '../../redux/store';
import {View, TouchableOpacity} from 'react-native';
import {GlobalStyle, Row} from '../../Utils/GlobalStyle';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Colors, lightTheme} from '../../Utils/Colors';

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
    if (navigation.getParent()) {
      navigation.dispatch(DrawerActions.openDrawer());
    }
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
                backgroundColor: Colors.white,
                borderColor: dark ? Colors.black : lightTheme.yellow,
              },
            ]}
            onPress={goBack}>
            <Icon
              size={responsive.fontSize(20)}
              name="chevron-left"
              type={IconType.Entypo}
              color={dark ? Colors.black : lightTheme.yellow}
            />
          </TouchableOpacity>
        )}
        <View style={GlobalStyle.row}>
          {noBack && (
            <Icon
              size={responsive.fontSize(20)}
              type={type}
              name={`${IconName}`}
              style={{marginRight: responsive.space(10)}}
              color={dark ? Colors.white : Colors.black}
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
                  size={responsive.fontSize(23)}
                  name={'chat'}
                  type={IconType.Entypo}
                  color={dark ? Colors.white : Colors.black}
                />
              </TouchableOpacity>
            )}
            {isMenu && (
              <TouchableOpacity onPress={() => openDrawer()}>
                <Icon
                  size={responsive.fontSize(23)}
                  name={'menu'}
                  type={IconType.Entypo}
                  style={{marginLeft: responsive.space(10)}}
                  color={dark ? Colors.white : Colors.black}
                />
              </TouchableOpacity>
            )}
          </Row>
        )}

        {searchBar && (
          <TouchableOpacity onPress={onSearch}>
            <Icon
              size={responsive.fontSize(23)}
              name={'search'}
              type={IconType.Ionicons}
              color={dark ? Colors.white : Colors.black}
            />
          </TouchableOpacity>
        )}
      </View>
      <Divider style={{width}} />
    </>
  );
};

export default Header;
