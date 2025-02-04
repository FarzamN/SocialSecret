import React, {FC, useEffect, useState} from 'react';
import {Pressable, View} from 'react-native';
import * as Anime from 'react-native-animatable';
import Sub from '../Texts/Sub';
import {Colors} from '../../Utils';
import {Font} from '../../Utils/font';
import {GlobalStyle} from '../../Utils/GlobalStyle';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {style} from './style';
import {WPSwitch} from '../../Utils/type';

const WallpaperSwitch: FC<WPSwitch> = ({data, onPress, focus}) => {
  const Theme = useSelector((state: RootState) => state.themeMode.defTheme);
  const dark = Theme === 'dark';

  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);
  useEffect(() => {
    if (focus) {
      setShouldAnimate(true);
    }
  }, [focus]);
  return (
    <View
      style={[
        style.SwitchCont,
        GlobalStyle.Space_evenly,
        {backgroundColor: dark ? Colors.DarkYellow : Colors.LightYellow},
      ]}>
      {data.map(item => {
        return (
          <Anime.View
            key={item.id}
            animation={
              focus === item.id && shouldAnimate ? 'fadeInLeft' : undefined
            }
            duration={1000}
            onAnimationEnd={() => setShouldAnimate(false)}>
            <Pressable
              onPress={() => onPress(item.id)}
              style={[
                GlobalStyle.justify,
                style.WPSwitchContainer,
                {
                  backgroundColor:
                    focus === item.id ? Colors.White : Colors.Non,
                  borderColor: focus === item.id ? Colors.Black : Colors.Non,
                },
              ]}>
              <Sub
                text={item.title}
                style={{
                  color: focus === item.id ? Colors.Black : Colors.White,
                  fontFamily: Font.font600,
                }}
              />
            </Pressable>
          </Anime.View>
        );
      })}
    </View>
  );
};

export default WallpaperSwitch;
