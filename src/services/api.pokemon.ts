import { Stat } from '../types/Stats';
import { pokeType } from '../types/pokeType';
import { Pokemon } from '../types/pokemon';
import { PokemonResponse } from '../types/pokemonDataResponse';
import { PokemonInfo } from '../types/pokemonInfo';

const url = 'https://pokeapi.co/api/v2';

export class PokeApiRespository {
  async mapPokemonApiData(pokemonInfo: PokemonResponse) {
    const pokemon: Pokemon = {
      id: pokemonInfo.id,
      name: pokemonInfo.name,
      imgUrl:
        pokemonInfo.sprites.versions['generation-v']['black-white'].animated
          .front_default ||
        pokemonInfo.sprites.front_default ||
        '/assets/pokeball-default.gif',
      size: {
        weight: pokemonInfo.weight,
        height: pokemonInfo.height,
      },
      stats: pokemonInfo.stats.map((s) => ({
        name: s.stat.name,
        value: s.base_stat,
      })),
      type1: pokemonInfo.types[0]?.type.name as keyof typeof pokeType,
      type2: pokemonInfo.types[1]?.type.name as keyof typeof pokeType,
    };
    return pokemon;
  }
}
