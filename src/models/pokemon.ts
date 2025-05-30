export type Pokemon = {
  name: string;
  type: string;
  url: string;
};

export type PokemonType = {
  name: string;
  url: string;
};

export type Ability = {
  ability: {name: string; url: string};
};

export type PokemonDetail = {
  height: number;
  name: string;
  weight: number;
  sprites: {
    front_default: string;
  };
  abilities: Ability[];
};

export type PokemonSliceState = {
  catchedPokemon: string[];
};
