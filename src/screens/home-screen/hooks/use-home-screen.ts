import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useCallback} from 'react';

import {usePokemonListQuery} from '../../../api-hooks';
import {Pokemon} from '../../../models';
import {
  HomeNavigatorParamList,
  RootNavigatorParamList,
} from '../../../navigation';

type UseHomeScreenValue = {
  data?: Pokemon[];
  isError: boolean;
  isLoading: boolean;
  navigateToDemoScreen: (name: string) => void;
};

type NavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<HomeNavigatorParamList, 'HomeScreenRoute'>,
  NativeStackNavigationProp<RootNavigatorParamList, 'HomeNavigatorRoute'>
>;

export const useHomeScreen = (): UseHomeScreenValue => {
  const {data, isError, isLoading} = usePokemonListQuery();
  const navigation = useNavigation<NavigationProp>();

  const navigateToDemoScreen = useCallback(
    (name: string) => {
      navigation.navigate('DetailsRoute', {name: name});
    },
    [navigation],
  );

  return {
    data,
    isError,
    isLoading,
    navigateToDemoScreen,
  };
};
