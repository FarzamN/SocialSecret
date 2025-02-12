import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {Header, ImageBackground, Radio, Sub} from '../../../Components';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {ThemeData} from '../../../Utils/Data';
import { lightTheme, darkTheme} from '../../../Utils/Colors';
import {useTheme} from '../../../Hooks';
import responsive, { SPACING } from '../../../Utils/responsive';

const Theme = ({navigation}) => {
  const {theme, updateTheme} = useTheme();
  const isDark =
    useSelector((state: RootState) => state.themeMode.defTheme) === 'dark';

  return (
    <ImageBackground>
      <Header gap label="Theme" />
      <Icon
        size={responsive.fontSize(100)}
        name={isDark ? 'moon' : 'wb-sunny'}
        color={isDark ? darkTheme.yellow : lightTheme.yellow}
        style={{alignSelf: 'center',marginTop:SPACING.DEFAULT}}
        type={isDark ? IconType.Ionicons : IconType.MaterialIcons}
      />
      <Sub center text={`Your Theme is set to ${theme}`} />
      {ThemeData.map((item, index) => (
        <Radio
          key={index}
          i={index}
          data={item}
          focus={theme === item.label}
          onPress={() => updateTheme(item.label)}
        />
      ))}
    </ImageBackground>
  );
};

export default Theme;
