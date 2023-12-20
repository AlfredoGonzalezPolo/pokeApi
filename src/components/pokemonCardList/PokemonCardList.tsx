import { Pokemon } from '../../types/pokemon';
import { FC } from 'react';
import PokeCard from '../pokemonCard/PokemonCard';
import { PokemonCardListStyled } from './PokemonCardListStyled';

interface Props {
  pokemonList: Pokemon[] | undefined;
}

const PokemonCardList: FC<Props> = ({ pokemonList }) => {
  return (
    <>
      <PokemonCardListStyled>
        {pokemonList?.map((pokemon) => (
          <li key={pokemon.id}>
            <PokeCard pokemon={pokemon} />
          </li>
        ))}
      </PokemonCardListStyled>
    </>
  );
};
export default PokemonCardList;
