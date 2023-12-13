import { Pokemon } from '../types/pokemon';
import { PokemonInfo } from '../types/pokemonInfo';

export class ApiPokemon {
  pokeUrl: string;
  serverUrl: string;

  constructor() {
    this.pokeUrl = `https://pokeapi.co/api/v2/pokemon?limit=`;
    this.serverUrl = `http://localhost:3000/pokemon`;
  }

  async getAll(limit: number = 20, offset: number = 0) {
    const response = await fetch(`${this.pokeUrl}${limit}&offset=${offset}`);
    const pokemonList = await response.json();
    return pokemonList.results;
  }

  async getEach(url: PokemonInfo['url']) {
    const response = await fetch(url);
    const search = await response.json();
    const pokemon: Pokemon = {
      id: search.id,
      name: search.name,
      imgUrl: search.sprites.front_default,
      size: { weight: search.weight, height: search.height },
      stats: {
        hp: search.stats[0].base_stat,
        attack: search.stats[1].base_stat,
        defense: search.stats[2].base_stat,
        specialAttack: search.stats[3].base_stat,
        specialDefense: search.stats[4].base_stat,
        speed: search.stats[5].base_stat,
      },
      type: {
        mainType: search.types[0]?.type?.name || null,
        secondaryType: search.types[1]?.type?.name || null,
      },
    };
    return pokemon;
  }
}
