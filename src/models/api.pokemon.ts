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
}
