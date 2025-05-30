import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {PokemonSliceState} from '../../models';

const initialState: PokemonSliceState = {catchedPokemon: ''};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    cathPokemon: (state, action: PayloadAction<{catchedPokemon: string}>) => {
      const {catchedPokemon} = action.payload;
      state.catchedPokemon = catchedPokemon;
    },
  },
});

export const {cathPokemon} = pokemonSlice.actions;
export default pokemonSlice.reducer;
