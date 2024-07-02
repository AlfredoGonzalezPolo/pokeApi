import { useEffect, useState } from 'react';
import { Pokemon } from '../models/pokemon.ts';
import { pokeApiRepo } from './usePokemons.ts';

const usePokemonDetail = (pokemonId: string | number) => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [isLoading, setIsLoading] = useState(false);
  const [isPending, setIsPending] = useState(false);
  useEffect(() => {
    if (!pokemonId) {
      return;
    }

    setIsLoading(true);

    pokeApiRepo
      .getPokemonDetail(pokemonId)
      .then((data) => setPokemon(data))
      .finally(() => {
        setIsPending(true);
        setIsLoading(false);
      });
  }, [pokemonId]);

  return { pokemon, isPending, isLoading };
};

export default usePokemonDetail;
