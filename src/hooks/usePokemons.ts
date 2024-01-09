import { useEffect, useState } from 'react';
import { Pokemon } from '../types/pokemon';
import { PokeApiRespository } from '../services/PokeApiRepository.service.ts';

const pokeApiRepo = new PokeApiRespository('https://pokeapi.co/api/v2');

const usePokemons = () => {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(20);

  const [maxPages, setMaxPages] = useState(1);
  const [pokemons, setPokemons] = useState<Pokemon[] | undefined>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (page <= maxPages) {
      setLoading(true);
      pokeApiRepo.getPokemonPage(page, limit).then((pageData) => {
        setPokemons(pageData?.pokemonsPageData);
        setMaxPages(pageData!.maxPages);
        setLoading(false);
      });
    }
  }, [page, limit, maxPages]);
  return { pokemons, page, setPage, setLimit, maxPages, loading };
};

export default usePokemons;

// import { useEffect, useState } from 'react';
// import { Pokemon } from '../types/pokemon';
// import { PokeApiRespository } from '../services/PokeApiRepository.service.ts';

// const pokeApiRepo = new PokeApiRespository('https://pokeapi.co/api/v2');

// interface UsePokemonsProps {
//   setPage: React.Dispatch<React.SetStateAction<number>>;
// }

// const usePokemons = ({ setPage }: UsePokemonsProps) => {
//   const [page, setPageState] = useState(0);
//   const [limit, setLimit] = useState(20);
//   const [maxPages, setMaxPages] = useState(1);
//   const [pokemons, setPokemons] = useState<Pokemon[] | undefined>([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     pokeApiRepo.getPokemonPage(page, limit).then((pageData) => {
//       setPokemons(pageData?.pokemonsPageData);
//       setMaxPages(pageData!.maxPages);
//       setLoading(false);
//     });
//   }, [page, limit]);

//   return { pokemons, page, setPage, setPageState, setLimit, maxPages, loading };
// };

// export default usePokemons;
