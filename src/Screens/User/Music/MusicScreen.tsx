import {View, Text, ScrollView, FlatList} from 'react-native';
import React, {useCallback, useState} from 'react';
import {
  Sub,
  Header,
  SearchBar,
  ImageBackground,
  SingerProfileCard as SPCard,
} from '../../../Components';
import {useFocusEffect} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {IMusic} from '../../../Utils/interface';
import {IconType} from 'react-native-dynamic-vector-icons';
import * as Anime from 'react-native-animatable';
import {style} from './style';
import {GlobalStyle} from '../../../Utils/GlobalStyle';
import {SingerProfileData} from '../../../Utils/Data';
import { Colors } from '../../../Utils/Colors';
import responsive from '../../../Utils/responsive';

const MusicScreen = ({navigation}: IMusic) => {
  const {navigate, getParent} = navigation;
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const dark =
    useSelector((state: RootState) => state.themeMode.defTheme) === 'dark';
  useFocusEffect(
    useCallback(() => {
      getParent()?.setOptions({
        tabBarStyle: {
          height: responsive.height(60),
          display: 'flex',
          backgroundColor: dark ? Colors.ash : Colors.white,
        },
      });
    }, [dark]),
  );
  return (
    <ImageBackground>
      {!showSearch ? (
        <Anime.View animation="fadeInLeft" duration={300}>
          <Header
            noBack
            searchBar
            label="Listen Songs"
            IconName="musical-notes"
            type={IconType.Ionicons}
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
      <ScrollView
        style={[GlobalStyle.Padding, GlobalStyle.mt]}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled>
        <Sub text="Suggested Artist" style={style.label} />
        <FlatList
        scrollEnabled={false}
          nestedScrollEnabled
          data={SingerProfileData}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({item}) => (
            <SPCard
              data={item}
              onPress={() => navigate('SingerProfile', {item})}
            />
          )}
        />
      </ScrollView>
    </ImageBackground>
  );
};

export default MusicScreen;
