import styled from 'styled-components';
import PokemonCardList from '../components/pokemonCardList/PokemonCardList';
import usePokemons from '../hooks/usePokemons';
import Pagination from '../components/pagination/Pagination';

const MainPageStyled = styled.section`
  margin: 0;
  padding: 1rem;
  overflow-y: hidden;
  overflow-x: hidden;
`;

const MainPage = () => {
  const { pokemons, page, setPage, setLimit, maxPages } = usePokemons();

  return (
    <>
      <MainPageStyled>
        <Pagination
          maxPages={maxPages}
          page={page}
          setLimit={setLimit}
          setPage={setPage}
        />
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
