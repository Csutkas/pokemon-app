import {useQuery, UseQueryResult} from '@tanstack/react-query';
import axios from 'axios';

import {Pokemon} from '../../models';
import {QUERY_KEYS} from '../query-keys';
import {API_BASE_URL} from '../../utils';

interface PokemonListQueryParams {
  search?: string;
  type?: string;
}

export const usePokemonListQuery = ({
  search,
  type,
}: PokemonListQueryParams = {}): UseQueryResult<Pokemon[], unknown> => {
  return useQuery({
    queryKey: [QUERY_KEYS.POKEMON_LIST, search, type],
    queryFn: async () => {
      let results: Pokemon[] = [];

      if (type) {
        const response = await axios.get(`${API_BASE_URL}/type/${type}`);
        results = response.data.pokemon.map(
          (entry: {pokemon: Pokemon}) => entry.pokemon,
        );
      } else {
        const response = await axios.get(`${API_BASE_URL}/pokemon?limit=1000`);
        results = response.data.results;
      }

      if (search) {
        results = results.filter((pokemon: Pokemon) =>
          pokemon.name.toLowerCase().includes(search.toLowerCase()),
        );
      }

      return results;
    },
    select: response => response,
  });
};
