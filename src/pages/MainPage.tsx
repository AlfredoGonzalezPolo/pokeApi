import styled from 'styled-components';
import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';
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
        <Header />
        <Pagination
          maxPages={maxPages}
          page={page}
          setLimit={setLimit}
          setPage={setPage}
        />
        {pokemons && <PokemonCardList pokemonList={pokemons} />}
        <Footer />
      </MainPageStyled>
    </>
  );
};

export default MainPage;
