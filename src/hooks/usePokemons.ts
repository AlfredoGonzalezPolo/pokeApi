import { useEffect, useState } from 'react';
import { Pokemon } from '../types/pokemon';
import { PokeApiRespository } from '../services/PokeApiRepository.service.ts';

const pokeApiRepo = new PokeApiRespository('https://pokeapi.co/api/v2');

const usePokemons = () => {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(20);
  const [pokemons, setPokemons] = useState<Pokemon[] | undefined>([]);

  useEffect(() => {
    pokeApiRepo.getPokemonPage(page, limit).then((pageData) => {
      setPokemons(pageData?.pokemonsPageData);
    });
  }, [page, limit]);
  return { pokemons, page, setPage, setLimit };
};

export default usePokemons;
