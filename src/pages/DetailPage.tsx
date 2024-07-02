import { useNavigate, useParams } from 'react-router-dom';
import usePokemonDetail from '../hooks/usePokemonDetail';
import { PokemonCardDetail } from '../components/pokemonCardDetail/PokemonCardDetail';
import styled from 'styled-components';

const DetailPageStyles = styled.section`
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

export const DetailPage = () => {
  const { id } = useParams();
  const { pokemon, isPending } = usePokemonDetail(id!);
  const navigate = useNavigate();

  return (
    <>
      <DetailPageStyles>
        <button onClick={() => navigate(-1)}>Volver</button>
        {isPending ? pokemon && <PokemonCardDetail pokemon={pokemon} /> : null}
      </DetailPageStyles>
    </>
  );
};

export default DetailPage;
