import {style} from './style';
import React, {FC} from 'react';
import {Divider, Sub} from '..';
import {useSelector} from 'react-redux';
import {HeaderType} from '../../Utils/type';
import {RootState} from '../../redux/store';
import {View, TouchableOpacity} from 'react-native';
import {Colors, lightTheme} from '../../Utils/Colors';
import {GlobalStyle, Row} from '../../Utils/GlobalStyle';
import responsive, {width} from '../../Utils/responsive';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {DrawerActions, useNavigation} from '@react-navigation/native';

const Header: FC<HeaderType> = props => {
  const {
    gap,
    type,
    label,
    noBack,
    isMenu,
    double,
    isChat,
    onSearch,
    IconName,
    searchBar,
    onChatPress,
  } = props;
  const {goBack} = useNavigation();
  const {getParent, dispatch} = useNavigation();

  const openDrawer = () => {
    if (getParent()) dispatch(DrawerActions.openDrawer())
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
              name={`${IconName}`}
              size={responsive.fontSize(20)}
              type={type || IconType.Entypo}
              color={dark ? Colors.white : Colors.black}
              style={{marginRight: responsive.space(10)}}
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
                  name={'chat'}
                  type={IconType.Entypo}
                  size={responsive.fontSize(23)}
                  color={dark ? Colors.white : Colors.black}
                />
              </TouchableOpacity>
            )}
            {isMenu && (
              <TouchableOpacity onPress={openDrawer}>
                <Icon
                  name={'menu'}
                  type={IconType.Entypo}
                  size={responsive.fontSize(23)}
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
              name={'search'}
              type={IconType.Ionicons}
              size={responsive.fontSize(23)}
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
