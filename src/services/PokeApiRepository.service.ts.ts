import axios from 'axios';
import { pokeType } from '../models/pokeType';
import { Pokemon } from '../models/pokemon';
import { PokemonResponse } from '../models/pokemonDataResponse';
import { PokemonInfo } from '../models/pokemonInfo';
import { PokemonsByType } from '../models/pokemonsByType';
import { PokemonsPage } from '../models/pokemonsPage';

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
      imgUrl2: pokemonInfo.sprites.other.showdown.front_default,
      imgUrl2Back: pokemonInfo.sprites.other.showdown.back_default,
      imgUrl3: pokemonInfo.sprites.other.showdown.front_shiny,
      imgUrl3Back: pokemonInfo.sprites.other.showdown.back_shiny,

      size: {
        weight: pokemonInfo.weight,
        height: pokemonInfo.height,
      },
      stats: pokemonInfo.stats.map((stat) => ({
        name: stat.stat.name,
        value: stat.base_stat,
      })),
      type1: pokemonInfo.types[0]?.type.name as keyof typeof pokeType,
      type2: pokemonInfo.types[1]?.type.name as keyof typeof pokeType,
    };
    return pokemon;
  }

  async getPokemonsData(pokemonsPage: PokemonsPage | PokemonsByType) {
    const pokemonDataPromise = pokemonsPage.results.map(async (pokemonRef) => {
      const response = await axios.get(pokemonRef.url);
      const pokemonInfo: PokemonResponse = response.data;
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

  // async getPokemonPage(page: number = 1, limit: number = 20) {
  //   try {
  //     const response = await axios.get(
  //       `${this.url}/pokemon/?limit=${limit}&offset=${page * limit}`
  //     );
  //     const pokemonsPage: PokemonsPage = response.data;
  //     const pokemonsPageData = await this.getPokemonsData(pokemonsPage);

  //     return {
  //       pokemonsPageData,
  //       maxPages: Math.ceil(pokemonsPage.count / limit - 1),
  //     };
  //   } catch (error) {
  //     return undefined;
  //   }
  // }

  async getPokemonPage(page: number = 1, limit: number = 20) {
    try {
      const response = await axios.get(
        `${this.url}/pokemon/?limit=${limit}&offset=${(page - 1) * limit}`
      );
      const pokemonsPage: PokemonsPage = response.data;
      const pokemonsPageData = await this.getPokemonsData(pokemonsPage);

      return {
        pokemonsPageData,
        maxPages: Math.ceil(pokemonsPage.count / limit),
      };
    } catch (error) {
      console.error('Failed to fetch Pokemon page', error);
      return undefined;
    }
  }

  async getPokemonsByType(type: string | undefined) {
    try {
      const response = await axios.get(`${this.url}/type/${type}`);
      const pokemonsResponse = response.data;

      const PokemonsByType: PokemonsByType = {
        results: pokemonsResponse.pokemon.map(
          (info: { pokemon: PokemonInfo }) => info.pokemon
        ),
      };

      return this.getPokemonsData(PokemonsByType);
    } catch (error) {
      return undefined;
    }
  }

  async getPokemonDetail(pokemonId: string | number) {
    try {
      const response = await axios.get(`${this.url}/pokemon/${pokemonId}`);

      const pokemonInfo: PokemonResponse = response.data;
      const pokemon = this.mapPokemonApiData(pokemonInfo);

      return pokemon;
    } catch (error) {
      return undefined;
    }
  }
}
