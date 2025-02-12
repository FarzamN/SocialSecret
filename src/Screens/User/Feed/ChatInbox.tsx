import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import * as Anime from 'react-native-animatable';
import React, {useCallback, useState} from 'react';
import {IChatInbox} from '../../../Utils/interface';
import {GlobalStyle} from '../../../Utils/GlobalStyle';
import {useFocusEffect} from '@react-navigation/native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {
  Header,
  InboxCard,
  InboxHidden,
  SearchBar,
  ImageBackground,
} from '../../../Components';
import {inboxData} from '../../../Utils/Data';
import { SPACING } from '../../../Utils/responsive';

const ChatInbox = ({navigation}: IChatInbox) => {
  const {navigate} = navigation
  const dark =
    useSelector((state: RootState) => state.themeMode.defTheme) === 'dark';
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const handleChat = (item: object) => {
    navigate("chatScreen", {item})
  };
  const handleDelete = (item: object) => {};
  
  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: GlobalStyle.HideBar,
      });
    }, []),
  );
  return (
    <ImageBackground>
      {!showSearch ? (
        <Anime.View animation="fadeIn" duration={1300}>
          <Header
            searchBar
            label="Inbox"
            onSearch={() => setShowSearch(true)}
          />
        </Anime.View>
      ) : (
        <Anime.View animation="fadeInRightBig" duration={300}>
          <SearchBar
            value={searchQuery}
            onChange={t => setSearchQuery(t)}
            onClose={() => setShowSearch(false)}
          />
        </Anime.View>
      )}
      <SwipeListView
        contentContainerStyle={{marginTop: SPACING.LARGE}}
        data={inboxData}
        renderItem={({item, index}) => (
          <InboxCard
            data={item}
            index={index}
            onPress={() => handleChat(item)}
          />
        )}
        renderHiddenItem={data => <InboxHidden onPress={() => handleDelete(data)}/>}
        disableRightSwipe
        rightOpenValue={-75}
      />
    </ImageBackground>
  );
};

export default ChatInbox;
