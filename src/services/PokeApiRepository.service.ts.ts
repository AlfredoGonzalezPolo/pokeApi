import { pokeType } from '../types/pokeType';
import { Pokemon } from '../types/pokemon';
import { PokemonResponse } from '../types/pokemonDataResponse';
import { PokemonInfo } from '../types/pokemonInfo';
import { PokemonsByType } from '../types/pokemonsByType';
import { PokemonsPage } from '../types/pokemonsPage';

// const url = 'https://pokeapi.co/api/v2';

export class PokeApiRespository {
  constructor(public url: string) {}
  async mapPokemonApiData(pokemonInfo: PokemonResponse) {
    const pokemon: Pokemon = {
      id: pokemonInfo.id,
      name: pokemonInfo.name,
      imgUrl:
        pokemonInfo.sprites.versions['generation-v']['black-white'].animated
          .front_default ||
        pokemonInfo.sprites.front_default ||
        '/assets/pokeball-default.gif',
      imgUrlBack:
        pokemonInfo.sprites.versions['generation-v']['black-white'].animated
          .back_default ||
        pokemonInfo.sprites.back_default ||
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

  async getPokemonsData(pokemonsPage: PokemonsPage | PokemonsByType) {
    const pokemonDataPromise = pokemonsPage.results.map(async (pokemonRef) => {
      const response = await fetch(pokemonRef.url);
      const pokemonInfo: PokemonResponse = await response.json();
      const pokemon = this.mapPokemonApiData(pokemonInfo);

      return pokemon;
    });

    try {
      const pokemonsData = await Promise.all(pokemonDataPromise);
      pokemonsData.sort((a, b) => a.id - b.id);
      return pokemonsData;
    } catch (error) {
      return undefined;
    }
  }

  async getPokemonPage(page: number = 1, limit: number = 20) {
    try {
      const response = await fetch(
        `${this.url}/pokemon/?limit=${limit}&offfset=${page * limit}`
      );
      const pokemonsPage: PokemonsPage = await response.json();
      const pokemonsPageData = await this.getPokemonsData(pokemonsPage);

      return {
        pokemonsPageData,
        maxPages: Math.ceil(pokemonsPage.count / limit - 1),
      };
    } catch (error) {
      return undefined;
    }
  }

  async getPokemonsByType(type: string | undefined) {
    try {
      const response = await fetch(`${this.url}/type/${type}`);
      const pokemonsResponse = await response.json();

      const PokemonsByType: PokemonsByType = {
        results: pokemonsResponse.pokemon.map(
          (info: { pokemon: PokemonInfo }) => info.pokemon
        ),
      };

      const pokemonByTypeData = await this.getPokemonsData(PokemonsByType);
      return pokemonByTypeData;
    } catch (error) {
      return undefined;
    }
  }
}
