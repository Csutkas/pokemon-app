import {useQuery, UseQueryResult} from '@tanstack/react-query';
import axios from 'axios';

import {PokemonDetail} from '../../models';
import {QUERY_KEYS} from '../query-keys';
import {API_BASE_URL} from '../../utils';

interface PokemonDetailsProp {
  name?: string;
}
export const usePokemonDetailsQuery = ({
  name,
}: PokemonDetailsProp): UseQueryResult<PokemonDetail, unknown> => {
  const headers = {
    'Content-Type': 'application/json',
    'x-api-key': 'DEMO',
  };

  return useQuery({
    queryKey: [QUERY_KEYS.POKEMON_DETAILS],
    queryFn: async () => {
      if (!name) {
        throw new Error('Name is required');
      }
      return await axios.get(`${API_BASE_URL}/pokemon/${name}`, {
        headers: headers,
      });
    },
    select: response => {
      return response.data;
    },
  });
};
