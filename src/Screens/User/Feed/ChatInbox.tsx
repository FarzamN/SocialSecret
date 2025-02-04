import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
import {Header, ImageBackground} from '../../../Components';
import {GlobalStyle} from '../../../Utils/GlobalStyle';
import {useFocusEffect} from '@react-navigation/native';
import {IChatInbox} from '../../../Utils/interface';

const ChatInbox = ({navigation}: IChatInbox) => {
  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: GlobalStyle.HideBar,
      });
    }, []),
  );
  return (
    <ImageBackground>
      <Header label="Chat Inbox" gap />
    </ImageBackground>
  );
};

export default ChatInbox;
