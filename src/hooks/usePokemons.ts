import { useEffect, useState } from 'react';
import { Pokemon } from '../types/pokemon';
import { PokeApiRespository } from '../services/PokeApiRepository.service.ts';

const pokeApiRepo = new PokeApiRespository('https://pokeapi.co/api/v2');

const usePokemons = () => {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(20);
  const [maxPages, setMaxPages] = useState(1);
  const [pokemons, setPokemons] = useState<Pokemon[] | undefined>([]);

  useEffect(() => {
    if (page > maxPages) return;
    pokeApiRepo.getPokemonPage(page, limit).then((pageData) => {
      setPokemons(pageData?.pokemonsPageData);
      setMaxPages(pageData!.maxPages);
    });
  }, [page, limit]);
  return { pokemons, page, setPage, setLimit, maxPages };
};

export default usePokemons;
