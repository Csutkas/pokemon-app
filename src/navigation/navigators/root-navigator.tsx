import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {JSX} from 'react';

import {DemoScreen} from '../../screens';
import {RootNavigatorParamList} from '../types/navigator-types';
import HomeNavigator from './home-navigator';

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

export const RootNavigator = (): JSX.Element | null => {
  return (
    <Stack.Navigator
      initialRouteName="HomeNavigatorRoute"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeNavigatorRoute" component={HomeNavigator} />
      <Stack.Group navigationKey="demo">
        <Stack.Screen name="DemoRoute" component={DemoScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
