import PokemonCardList from '../components/pokemonCardList/PokemonCardList';
import usePokemonFilter from '../hooks/usePokemonFilter';
import { useParams } from 'react-router-dom';

const FilterPage = () => {
  const { type } = useParams<{ type: string }>();

  const { pokemons } = usePokemonFilter(type);

  return <>{pokemons && <PokemonCardList pokemonList={pokemons} />}</>;
};

export default FilterPage;
