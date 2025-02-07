import React, {useCallback, useState} from 'react';
import {Header, ImageBackground, SearchBar} from '../../../Components';
import {useFocusEffect} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {IBlog} from '../../../Utils/interface';
import {IconType} from 'react-native-dynamic-vector-icons';
import * as Anime from 'react-native-animatable';
import { Colors } from '../../../Utils/Colors';
import responsive from '../../../Utils/responsive';

const ExploreScreen = ({navigation}: IBlog) => {
  const dark =
    useSelector((state: RootState) => state.themeMode.defTheme) === 'dark';
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
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
        <Anime.View animation="fadeIn" duration={1300}>
          <Header
            noBack
            searchBar
            label="Explore"
            IconName="video-library"
            type={IconType.MaterialIcons}
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
    </ImageBackground>
  );
};

export default ExploreScreen;
