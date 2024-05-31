import { useNavigate, useParams } from 'react-router-dom';
import usePokemonDetail from '../hooks/usePokemonDetail';

import { PokemonCardDetail } from '../components/pokemonCardDetail/PokemonCardDetail';

export const DetailPage = () => {
  const { id } = useParams();
  const { pokemon, isPending } = usePokemonDetail(id!);
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate('/')}>Volver</button>
      {isPending ? pokemon && <PokemonCardDetail pokemon={pokemon} /> : null}
    </>
  );
};

export default DetailPage;
