// usePokemonFilter.ts
import { useEffect, useState } from 'react';
import { Pokemon } from '../models/pokemon';
import { pokeApiRepo } from './usePokemons.ts';

const usePokemonFilter = (pokemonTypeFilter: string | undefined) => {
  const [pokemons, setPokemon] = useState<Pokemon[] | undefined>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!pokemonTypeFilter) return;

    setLoading(true);
    pokeApiRepo
      .getPokemonsByType(pokemonTypeFilter)
      .then((data) => {
        setPokemon(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [pokemonTypeFilter]);

  return { loading, pokemons };
};

export default usePokemonFilter;
