import {View, ScrollView, FlatList} from 'react-native';
import React, {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {
  Header,
  Heading,
  ImageBackground,
  SearchBar,
  WallpaperCard,
  WallpaperSwitch,
} from '../../../Components';
import {IWallpaper} from '../../../Utils/interface';

import {IconType} from 'react-native-dynamic-vector-icons';
import {Colors} from '../../../Utils';
import {styles} from './style';
import MasonryList from '@react-native-seoul/masonry-list';
import * as Anime from 'react-native-animatable';
import {width} from '../../../Utils/Constants';
import {ImageData, WPSwitchData} from '../../../Utils/Data';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

const WallpaperSceen = ({navigation}: IWallpaper) => {
  const {navigate, getParent} = navigation;
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [focus, setFocus] = useState(1);
  const Theme = useSelector((state: RootState) => state.themeMode.defTheme);
  const dark = Theme === 'dark';
  const colors = ['tomato', 'thistle', 'skyblue', 'teal'];

  const [scrollValue, setScrollValue] = useState(0);
  const onScroll = (e: any) => {
    setScrollValue(e.nativeEvent.contentOffset.y.toFixed(0));
  };
  const handleWP = (item: any) => {
    navigate('ApplyImage', {item});
  };
  useFocusEffect(
    useCallback(() => {
      getParent()?.setOptions({
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
      {!showSearch ? (
        <Anime.View animation="fadeIn" duration={1300}>
          <Header
            noBack
            searchBar
            IconName="images"
            label="Change Wallpaper"
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
      {scrollValue > 205 && (
        <Anime.View animation="fadeInDown" duration={1000}>
          <WallpaperSwitch
            focus={focus}
            data={WPSwitchData}
            onPress={id => setFocus(id)}
          />
        </Anime.View>
      )}
      <ScrollView
        nestedScrollEnabled
        onScroll={onScroll}
        showsVerticalScrollIndicator={false}>
        <SwiperFlatList
          style={styles.SwipeCont}
          autoplay
          autoplayDelay={2}
          autoplayLoop
          index={2}
          data={colors}
          renderItem={({item}) => (
            <View style={[styles.SwipeFlatListCont, {backgroundColor: item}]}>
              <Heading text={item} center />
            </View>
          )}
        />
        {scrollValue < 206 && (
          <Anime.View animation="fadeInUp" duration={1000}>
            <WallpaperSwitch
              focus={focus}
              data={WPSwitchData}
              onPress={id => setFocus(id)}
            />
          </Anime.View>
        )}
        <View style={{height: 3}} />
        <View style={{width, marginHorizontal: 5}}>
          <MasonryList
            numColumns={2}
            data={ImageData}
            nestedScrollEnabled
            scrollEnabled={false}
            renderItem={({item}) => (
              <WallpaperCard onPress={() => handleWP(item)} data={item} />
            )}
            keyExtractor={(_, i) => i.toString()}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default WallpaperSceen;
