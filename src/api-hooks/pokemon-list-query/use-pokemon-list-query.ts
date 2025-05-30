import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';

import { Pokemon } from '../../models';
import { QUERY_KEYS } from '../query-keys';

export const usePokemonListQuery = (): UseQueryResult<Pokemon[], unknown> => {
  const headers = {
    'Content-Type': 'application/json',
    'x-api-key': `${process.env.API_KEY}`,
  };

  return useQuery({
    queryKey: [QUERY_KEYS.POKEMON_LIST],
    queryFn: async () => await axios.get(`${process.env.API_URL}/pokemon`, { headers: headers }),
    select: (response) => response.data.results,
  });
};
