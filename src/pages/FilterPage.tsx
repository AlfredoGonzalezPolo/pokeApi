import styled from 'styled-components';
import PokemonCardList from '../components/pokemonCardList/PokemonCardList';
import usePokemonFilter from '../hooks/usePokemonFilter';
import { useNavigate, useParams } from 'react-router-dom';

const FilterPageStyles = styled.section`
  margin: 0;
  padding: 1rem;
  overflow-y: hidden;
  overflow-x: hidden;
  button {
    background-color: transparent;
    font-weight: 700;
    cursor: pointer;
    padding: 1rem;

    &:hover {
      background-color: #9fa1e4;
      color: #fafafa;
    }
  }
`;

const FilterPage = () => {
  const { type } = useParams<{ type: string }>();

  const { pokemons } = usePokemonFilter(type);
  const navigate = useNavigate();
  return (
    <>
      <FilterPageStyles>
        <button onClick={() => navigate(-1)}>Volver</button>
        {pokemons && <PokemonCardList pokemonList={pokemons} />}
      </FilterPageStyles>
    </>
  );
};

export default FilterPage;
