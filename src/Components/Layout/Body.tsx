import React, {FC} from 'react';
import {SafeAreaView, View} from 'react-native';
import {GlobalStyle} from '../../Utils/GlobalStyle';
import {BodyProps} from '../../Utils/type';
import {RootState} from '../../redux/store';
import {useSelector} from 'react-redux';
import { useDrawerStatus } from '@react-navigation/drawer';

const Body: FC<BodyProps> = ({children, style}) => {
  const {user} = useSelector((state: RootState) => state.auth);
  const Theme = useSelector((state: RootState) => state.themeMode.defTheme);
  const dark = Theme === 'dark';

  const drawerBG = dark ? '#F1F1F1' : '#00103B';
  const normalBG = dark ? '#00040F' : '#F1F1F1';
  const isDrawerOpen = user !== null && useDrawerStatus() === 'open';
  return (
    <View style={[GlobalStyle.container, style]}>
      <SafeAreaView style={{backgroundColor: isDrawerOpen ? drawerBG : normalBG}} />
      {children}
    </View>
  );
};

export default Body;
