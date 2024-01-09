import { FC } from 'react';
import { Pokemon } from '../../types/pokemon';

export interface Props {
  pokemon: Pokemon;
}

export const PokemonCardDetail: FC<Props> = ({ pokemon }) => {
  const { name, id, imgUrl, imgUrlBack } = pokemon;
  return (
    <>
      <div className="pokemon-info">
        <h2>{name}</h2>
        <p className="pokemon-id">#{id.toString()}</p>
      </div>
      <div className="pokemon-details">
        <img
          src={imgUrl}
          alt={name}
          className="pokemon-img"
          onMouseOver={(e) => (e.currentTarget.src = imgUrlBack)}
          onMouseOut={(e) => (e.currentTarget.src = imgUrl)}
        />
      </div>
    </>
  );
};
