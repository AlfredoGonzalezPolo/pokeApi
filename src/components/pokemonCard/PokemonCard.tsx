import { FC } from 'react';
import { Pokemon } from '../../models/pokemon';
import { PokemonCardStyled } from './PokemonCardStyled';
import PokemonTypes from '../Pokemontypes/PokemonTypes';
import Myswiper from '../swiper/Swiper';

export interface Props {
  pokemon: Pokemon;
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { name, id, type1, type2 } = pokemon;

  return (
    <PokemonCardStyled pokemon={pokemon} className="pokemon-card">
      <>
        <div className="pokemon-info">
          <h2 className="pokemon-name">{name.toUpperCase()}</h2>
          <p className="pokemon-id"># {id.toString()}</p>
        </div>
        <div className="pokemon-img-container">
          <Myswiper pokemon={pokemon}></Myswiper>
        </div>
        <div className="types">
          <PokemonTypes type={type1}></PokemonTypes>
          <p>{type1}</p>
          <PokemonTypes type={type2}></PokemonTypes>
          <p>{type2}</p>
        </div>
      </>
    </PokemonCardStyled>
  );
};

export default PokemonCard;
