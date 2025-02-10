import {Text} from 'react-native';
import React, {useCallback} from 'react';
import {Header, ImageBackground} from '../../../Components';
import {IconType} from 'react-native-dynamic-vector-icons';
import {useFocusEffect} from '@react-navigation/native';
import {IFeed} from '../../../Utils/interface';
import {RootState} from '../../../redux/store';
import {useSelector} from 'react-redux';
import { iOS } from '../../../Utils/Constants';
import { Colors } from '../../../Utils/Colors';
import responsive from '../../../Utils/responsive';

const FeedScreen = ({navigation}: IFeed) => {
  const dark =
    useSelector((state: RootState) => state.themeMode.defTheme) === 'dark';
  const {navigate} = navigation;
  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: 'flex',
          height: responsive.height(80),
          backgroundColor: dark ? Colors.ash : Colors.white,
        },
      });
    }, [dark]),
  );

  return (
    <ImageBackground>
      <Header
        isChat
        noBack
        isMenu
        double
        label="Feeds"
        IconName="feed"
        type={IconType.MaterialIcons}
        onChatPress={() => navigate('chatInbox')}
      />
      <Text>Picture</Text>
    </ImageBackground>
  );
};

export default FeedScreen;
