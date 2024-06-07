import { FC } from 'react';

import { Pokemon } from '../../models/pokemon';
import PokemonTypes from '../Pokemontypes/PokemonTypes';
import Myswiper from '../swiper/Swiper';
import { PokemonCardStyled } from './PokemonCardStyled';

export interface Props {
  pokemon: Pokemon;
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { name, id, type1, type2 } = pokemon;

  return (
    <PokemonCardStyled pokemon={pokemon} className="pokemon-card">
      <div className="pokemon-info">
        <h2 className="pokemon-name">{name.toUpperCase()}</h2>
        <p className="pokemon-id"># {id.toString()}</p>
      </div>
      <div className="pokemon-img-container">
        <Myswiper pokemon={pokemon} />
      </div>
      <div className="types">
        <PokemonTypes type={type1} />
        <p>{type1}</p>
        <PokemonTypes type={type2} />
        <p>{type2}</p>
      </div>
    </PokemonCardStyled>
  );
};

export default PokemonCard;
