import styled from 'styled-components';
import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';
import PokemonCardList from '../components/pokemonCardList/PokemonCardList';
import usePokemons from '../hooks/usePokemons';

const MainPageStyled = styled.section`
  margin: 0;
  padding: 1rem;
  overflow-y: hidden;
  overflow-x: hidden;
`;

const MainPage = () => {
  const { pokemons, page, setPage, setLimit } = usePokemons();

  return (
    <>
      <MainPageStyled>
        <Header />
        {pokemons && <PokemonCardList pokemonList={pokemons} />}
        <Footer />
      </MainPageStyled>
    </>
  );
};

export default MainPage;
