import { FC } from 'react';
import { Pokemon } from '../../models/pokemon';
import { PokemonCardStyled } from './PokemonCardStyled';
import { Link } from 'react-router-dom';
import PokemonTypes from '../Pokemontypes/PokemonTypes';

export interface Props {
  pokemon: Pokemon;
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { name, id, imgUrl, imgUrlBack, type1, type2 } = pokemon;

  return (
    <PokemonCardStyled pokemon={pokemon} className="pokemon-card">
      <>
        <div className="pokemon-info">
          <h2 className="pokemon-name">{name.toUpperCase()}</h2>
          <p className="pokemon-id"># {id.toString()}</p>
        </div>
        <div className="pokemon-img-container">
          <Link to={`${id}`}>
            <img
              src={imgUrl}
              alt={name}
              // width={145}
              className="pokemon-img"
              onMouseOver={(e) => (e.currentTarget.src = imgUrlBack)}
              onMouseOut={(e) => (e.currentTarget.src = imgUrl)}
            />
          </Link>
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
