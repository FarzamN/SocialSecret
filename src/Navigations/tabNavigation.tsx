import {
  Player,
  ChatInbox,
  FeedScreen,
  ChatScreen,
  MusicScreen,
  ExploreScreen,
} from '../Screens/User';
import {style} from './style';
import React, {FC} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {UserNavData} from '../Utils/Data';
import {NavigatorConfig} from '../Utils/interface';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Colors, darkTheme } from '../Utils/Colors';
import { FONT_SIZES } from '../Utils/responsive';
import { GlobalStyle } from '../Utils/GlobalStyle';

const Tab = createBottomTabNavigator();

const createNavigator = (config: NavigatorConfig) => {
  const {Navigator, Screen} = createNativeStackNavigator();

  return (
    <Navigator
      screenOptions={{headerShown: false, animation: 'ios_from_right'}}
      initialRouteName={config.initialRouteName}>
      {config.screens.map(({name, component}) => (
        <Screen key={name} name={name} component={component} />
      ))}
    </Navigator>
  );
};

const allFeedConfig: NavigatorConfig = {
  initialRouteName: 'feeda',
  screens: [
    {name: 'feeda', component: FeedScreen},
    {name: 'chatInbox', component: ChatInbox},
    {name: 'chatScreen', component: ChatScreen},
  ],
};

const allBlogConfig: NavigatorConfig = {
  initialRouteName: 'Bloga',
  screens: [{name: 'Bloga', component: ExploreScreen}],
};
const allMusicConfig: NavigatorConfig = {
  initialRouteName: 'Musica',
  screens: [
    {name: 'Musica', component: MusicScreen},
    {name: 'Player', component: Player},
  ],
};

export const AllFeed = () => createNavigator(allFeedConfig);
export const AllExplore = () => createNavigator(allBlogConfig);
export const AllMusic = () => createNavigator(allMusicConfig);

const UserNavigation: FC = () => {
  const dark =
    useSelector((state: RootState) => state.themeMode.defTheme) === 'dark';
  const color = dark ? Colors.white : Colors.black;
  const tint = dark ? Colors.white : Colors.grey;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: color,
        tabBarLabelStyle: style.Text,
        tabBarInactiveTintColor: tint,
        tabBarLabelPosition: 'below-icon',
      }}
      initialRouteName={UserNavData[0].name}>
      {UserNavData.map(({name, com, icon, dif}) => (
        <Tab.Screen
          key={name}
          name={name}
          component={com}
          options={{
            tabBarIcon: ({focused}) => {
              const backgroundColor = focused ? darkTheme.yellow : Colors.Non;

              return (
                <View style={[style.IconBox, GlobalStyle.justify,{backgroundColor}]}>
                  <Icon
                    name={icon}
                    size={FONT_SIZES.SUB_HEADING}
                    color={focused ? color : Colors.grey}
                    type={dif ? IconType.MaterialIcons : IconType.Ionicons}
                  />
                </View>
              );
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default UserNavigation;
