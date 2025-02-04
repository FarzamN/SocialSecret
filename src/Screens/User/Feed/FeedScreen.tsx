import {View, Text, BackHandler} from 'react-native';
import React, {useCallback} from 'react';
import {Header, ImageBackground} from '../../../Components';
import {IconType} from 'react-native-dynamic-vector-icons';
import {GlobalStyle} from '../../../Utils/GlobalStyle';
import {useFocusEffect} from '@react-navigation/native';
import {IFeed} from '../../../Utils/interface';
import {RootState} from '../../../redux/store';
import {useSelector} from 'react-redux';
import {Colors} from '../../../Utils';

const FeedScreen = ({navigation}: IFeed) => {
  const dark =
    useSelector((state: RootState) => state.themeMode.defTheme) === 'dark';
  const {navigate} = navigation;
  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          height: 60,
          display: 'flex',
          backgroundColor: dark ? Colors.Ash : Colors.White,
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
