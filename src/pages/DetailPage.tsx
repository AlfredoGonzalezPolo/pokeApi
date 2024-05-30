import { useParams } from 'react-router-dom';
import usePokemonDetail from '../hooks/usePokemonDetail';

import { PokemonCardDetail } from '../components/pokemonCardDetail/PokemonCardDetail';

export const DetailPage = () => {
  const { id } = useParams();
  const { pokemon, isPending } = usePokemonDetail(id!);

  return (
    <>{isPending ? pokemon && <PokemonCardDetail pokemon={pokemon} /> : null}</>
  );
};

export default DetailPage;
