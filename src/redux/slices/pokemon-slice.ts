import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {PokemonSliceState} from '../../models';

const initialState: PokemonSliceState = {catchedPokemon: []};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    catchPokemon: (state, action: PayloadAction<string>) => {
      if (!state.catchedPokemon.includes(action.payload)) {
        state.catchedPokemon.push(action.payload);
      }
    },
    releasePokemon: (state, action: PayloadAction<string>) => {
      state.catchedPokemon = state.catchedPokemon.filter(
        name => name !== action.payload,
      );
    },
  },
});

export const {catchPokemon, releasePokemon} = pokemonSlice.actions;
export default pokemonSlice.reducer;
