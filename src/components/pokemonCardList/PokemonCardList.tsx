import { Pokemon } from '../../types/pokemon';
import { FC } from 'react';

interface Props {
  pokemonList: Pokemon[] | undefined;
}

export const PokemonCardList: FC<Props> = ({ pokemonList }) => {
  return (
    <>
      {pokemonList?.map((pokemon) => (
        <li key={pokemon.id}></li>
      ))}
    </>
  );
};
