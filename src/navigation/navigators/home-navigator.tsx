import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {JSX} from 'react';

import {AboutScreen, HomeScreen} from '../../screens';
import {HomeNavigatorParamList} from '../types/navigator-types';

const Tab = createBottomTabNavigator<HomeNavigatorParamList>();

const HomeNavigator = (): JSX.Element => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeScreenRoute"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
        }}
      />

      <Tab.Screen
        name="AboutScreenRoute"
        component={AboutScreen}
        options={{
          tabBarLabel: 'About',
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
