import { PokemonInfo } from './pokemonInfo';

export type PokemonsByType = {
  results: PokemonInfo[];
};

export type PokemonsByTypeResponse = {
  pokemon: { pokemon: PokemonInfo; slot: number }[];
};
