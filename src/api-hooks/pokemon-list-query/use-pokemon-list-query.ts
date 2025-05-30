import {useQuery, UseQueryResult} from '@tanstack/react-query';
import axios from 'axios';

import {Pokemon} from '../../models';
import {QUERY_KEYS} from '../query-keys';
import {API_BASE_URL} from '../../utils';

export const usePokemonListQuery = (): UseQueryResult<Pokemon[], unknown> => {
  const headers = {
    'Content-Type': 'application/json',
    'x-api-key': 'DEMO',
  };

  return useQuery({
    queryKey: [QUERY_KEYS.POKEMON_LIST],
    queryFn: async () =>
      await axios.get(`${API_BASE_URL}/pokemon`, {headers: headers}),
    select: response => response.data.results,
  });
};
