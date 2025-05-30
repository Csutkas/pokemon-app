import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useCallback} from 'react';

import {usePokemonDetailsQuery} from '../../../api-hooks';
import {Ability} from '../../../models';
import {RootNavigatorParamList} from '../../../navigation';

type UseDetailsScreenValue = {
  onGoBack: () => void;
  isLoading: boolean;
  isError: boolean;
  pokemonName?: string;
  pokemonHeight?: number;
  pokemonWeight?: number;
  imageUrl?: string;
  abilities: Ability[];
};

export const useDetailsScreen = (): UseDetailsScreenValue => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootNavigatorParamList, 'HomeNavigatorRoute'>
    >();
  const {params: {name} = {}} =
    useRoute<RouteProp<RootNavigatorParamList, 'DetailsRoute'>>();

  const {data, isLoading, isError} = usePokemonDetailsQuery({name});

  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return {
    onGoBack,
    isLoading,
    isError,
    pokemonName: data?.name,
    pokemonWeight: data?.weight,
    pokemonHeight: data?.height,
    imageUrl: data?.sprites.front_default,
    abilities: data?.abilities || [],
  };
};
