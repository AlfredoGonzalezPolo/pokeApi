import { FC } from 'react';
import { Pokemon } from '../../types/pokemon';
import { PokemonCardStyled } from './PokemonCardStyled';
import { Link } from 'react-router-dom';

export interface Props {
  pokemon: Pokemon;
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { name, id, imgUrl, imgUrlBack } = pokemon;

  return (
    <PokemonCardStyled pokemon={pokemon} className="pokemon-card">
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
      <div className="types"></div>
    </PokemonCardStyled>
  );
};

export default PokemonCard;
