import { FC } from 'react';
import { Pokemon } from '../../types/pokemon';
import { PokemonCardStyled } from './pokemonCardStyled';

export interface Props {
  pokemon: Pokemon;
}

const PokeCard: FC<Props> = ({ pokemon }) => {
  const { name, id } = pokemon;

  return (
    <PokemonCardStyled pokemon={pokemon} className="pokemon-card">
      <div className="pokemon-info">
        <h2 className="pokemon-name">{name}</h2>
        <p className="pokemon-id">#{id.toString()}</p>
      </div>
    </PokemonCardStyled>
  );
};

export default PokeCard;
