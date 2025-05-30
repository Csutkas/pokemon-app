import {useQuery, UseQueryResult} from '@tanstack/react-query';
import axios from 'axios';

import {PokemonType} from '../../models';
import {API_BASE_URL} from '../../utils';
import {QUERY_KEYS} from '../query-keys';

export const usePokemonTypesQuery = (): UseQueryResult<
  PokemonType[],
  unknown
> => {
  const headers = {
    'Content-Type': 'application/json',
    'x-api-key': 'DEMO',
  };

  return useQuery({
    queryKey: [QUERY_KEYS.POKEMON_TYPES],
    queryFn: async () => {
      const response = await axios.get(`${API_BASE_URL}/type`, {headers});
      return response.data.results;
    },
    select: response => response,
  });
};
