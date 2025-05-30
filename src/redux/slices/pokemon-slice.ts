import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {PokemonSliceState} from '../../models';

const initialState: PokemonSliceState = {catchedPokemon: ''};

const profileSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<{catchedPokemon: string}>) => {
      const {catchedPokemon} = action.payload;
      state.catchedPokemon = catchedPokemon;
    },
  },
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;
