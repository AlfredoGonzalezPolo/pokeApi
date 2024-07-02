import styled from 'styled-components';
import PokemonCardList from '../components/pokemonCardList/PokemonCardList';
import usePokemons from '../hooks/usePokemons';
import Pagination from '../components/pagination/Pagination';
import { SearchBar } from '../components/searchBar/SearchBar';
import { Header } from '../components/header/Header';
import { useEffect } from 'react';

const MainPageStyled = styled.section`
  margin: 0;
  padding: 1rem;
  overflow-y: hidden;
  overflow-x: hidden;
`;

const MainPage = () => {
  const { pokemons, page, setPage, setLimit, maxPages, loading } =
    usePokemons();

  useEffect(() => {
    setPage(1);
  }, [setPage]);

  return (
    <>
      <MainPageStyled>
        <Header />
        <SearchBar />
        <Pagination
          maxPages={maxPages}
          page={page}
          setLimit={setLimit}
          setPage={setPage}
        />
        {loading && <p>Loading...</p>}
        {pokemons && <PokemonCardList pokemonList={pokemons} />}
        <Pagination
          maxPages={maxPages}
          page={page}
          setLimit={setLimit}
          setPage={setPage}
        />
      </MainPageStyled>
    </>
  );
};

export default MainPage;
