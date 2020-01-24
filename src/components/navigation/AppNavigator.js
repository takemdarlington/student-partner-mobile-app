import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Profile from '../Profile';
import Home from '../Home';

import homeIcon from '../../assets/ic_home/ic_home.png';
import settingsIcon from '../../assets/ic_settings/ic_settings.png';
import Colors from '../../helpers/Colors';

const iconForTab = ({ state }) => {
  switch (state.routeName) {
    case 'Home':
      return homeIcon;
    case 'Profile':
      return settingsIcon;
    case 'Search':
      return settingsIcon;
    default:
      return null;
  }
};

const TabIcon = ({ icon, tintColor }) => (// eslint-disable-line
  <Image
    source={icon}
    style={{ tintColor }}
  />
);

const ProfileStack = createStackNavigator({ Profile });
const SearchStack = createStackNavigator({ Home });
const HomeStack = createStackNavigator({ Home });
const AppStack = createMaterialBottomTabNavigator(
  {
    Home: HomeStack,
    Profile: ProfileStack,
    Search: SearchStack
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: Colors.primary,
      inactiveTintColor: Colors.gray,
      style: {
        backgroundColor: Colors.White,
      },
    },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => (// eslint-disable-line
        <TabIcon
          icon={iconForTab(navigation)}
          tintColor={tintColor}
        />
      ),
    }),
  },
);

export default AppStack;
