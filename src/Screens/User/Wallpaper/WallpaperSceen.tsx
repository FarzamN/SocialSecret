import {
  Header,
  Heading,
  SearchBar,
  WallpaperCard,
  ImageBackground,
  WallpaperSwitch,
} from '../../../Components';
import {styles} from './style';
import {useSelector} from 'react-redux';
import {View, ScrollView} from 'react-native';
import {Colors} from '../../../Utils/Colors';
import {RootState} from '../../../redux/store';
import * as Anime from 'react-native-animatable';
import {width} from '../../../Utils/responsive';
import responsive from '../../../Utils/responsive';
import React, {useState, useCallback} from 'react';
import {IWallpaper} from '../../../Utils/interface';
import {useFocusEffect} from '@react-navigation/native';
import {IconType} from 'react-native-dynamic-vector-icons';
import MasonryList from '@react-native-seoul/masonry-list';
import {ImageData, WPSwitchData} from '../../../Utils/Data';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

const WallpaperSceen = ({navigation}: IWallpaper) => {
  const {navigate, getParent} = navigation;
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [focus, setFocus] = useState(1);
  const Theme = useSelector((state: RootState) => state.themeMode.defTheme);
  const dark = Theme === 'dark';

  const [scrollValue, setScrollValue] = useState(0);
  const showStickySwitch = scrollValue > 205; // Controls visibility

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
            onChange={setSearchQuery}
            onClose={() => setShowSearch(false)}
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
          autoplayDelay={3}
          autoplayLoop
          index={2}
          data={['tomato', 'thistle', 'skyblue', 'teal']}
          renderItem={({item}) => (
            <View style={[styles.SwipeFlatListCont, {backgroundColor: item}]}>
              <Heading text={item} center />
            </View>
          )}
        />
        <Anime.View
          animation={showStickySwitch ? 'fadeInDown' : 'fadeInUp'}
          duration={1000}>
          <WallpaperSwitch
            focus={focus}
            data={WPSwitchData}
            onPress={setFocus}
          />
        </Anime.View>
        <View style={{height: responsive.height(3)}} />
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
