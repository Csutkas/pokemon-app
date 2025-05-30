import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useCallback, useState} from 'react';

import {usePokemonListQuery, usePokemonTypesQuery} from '../../../api-hooks';
import {Pokemon} from '../../../models';
import {
  HomeNavigatorParamList,
  RootNavigatorParamList,
} from '../../../navigation';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {catchPokemon, releasePokemon} from '../../../redux';

type UseHomeScreenValue = {
  data?: Pokemon[];
  isError: boolean;
  isLoading: boolean;
  navigateToDemoScreen: (name: string) => void;
  search: string;
  setSearch: (search: string) => void;
  selectedType: string;
  types: {name: string; url: string}[];
  typesLoading: boolean;
  typesError: boolean;
  onCatch: ({id}: CatchProps) => void;
  onRelease: ({id}: CatchProps) => void;
  catchedPokemon: string[];
  handleTypeSelect: (type: string) => void;
};

type NavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<HomeNavigatorParamList, 'HomeScreenRoute'>,
  NativeStackNavigationProp<RootNavigatorParamList, 'HomeNavigatorRoute'>
>;

export type CatchProps = {
  id: string;
};

export const useHomeScreen = (): UseHomeScreenValue => {
  const dispatch = useAppDispatch();
  const {catchedPokemon} = useAppSelector(state => state.pokemon);
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const {data, isError, isLoading} = usePokemonListQuery({
    search,
    type: selectedType || undefined,
  });
  const {
    data: types,
    isError: typesError,
    isLoading: typesLoading,
  } = usePokemonTypesQuery();
  const navigation = useNavigation<NavigationProp>();

  const navigateToDemoScreen = useCallback(
    (name: string) => {
      navigation.navigate('DetailsRoute', {name: name});
    },
    [navigation],
  );

  const onCatch = useCallback(
    ({id}: CatchProps) => {
      dispatch(catchPokemon(id));
    },
    [dispatch],
  );

  const onRelease = useCallback(
    ({id}: CatchProps) => {
      dispatch(releasePokemon(id));
    },
    [dispatch],
  );

  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
  };

  return {
    data,
    isError,
    isLoading,
    navigateToDemoScreen,
    search,
    setSearch,
    selectedType,
    types: types || [],
    typesLoading,
    typesError,
    onCatch,
    onRelease,
    catchedPokemon,
    handleTypeSelect,
  };
};
