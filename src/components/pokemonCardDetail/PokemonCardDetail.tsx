import { FC } from 'react';
import { Pokemon } from '../../models/pokemon';
import { PokemonCardDetailStyled } from './PokemonCardDetailStyled';
import PokemonTypes from '../Pokemontypes/PokemonTypes';

export interface Props {
  pokemon: Pokemon;
}

export const PokemonCardDetail: FC<Props> = ({ pokemon }) => {
  const { name, id, imgUrl, imgUrlBack, type1, type2, stats, size } = pokemon;
  return (
    <>
      <PokemonCardDetailStyled pokemon={pokemon}>
        <div className="pokemon-info">
          <h2 className="pokemon-name">{name.toUpperCase()}</h2>
          <p className="pokemon-id"># {id.toString()}</p>
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
        <div className="stats">
          <p className="pokemon-stats">
            Weight: <b>{size.weight}</b> kg
          </p>
          <p className="pokemon-stats">
            Height: <b>{size.height}</b> cm
          </p>
          {stats.map((s) => (
            <p className="pokemon-stats" key={s.name + id}>
              {s.name} : <b>{s.value}</b>
            </p>
          ))}
        </div>
        <div className="types">
          <PokemonTypes type={type1}></PokemonTypes>
          <p>{type1}</p>
          <PokemonTypes type={type2}></PokemonTypes>
          <p>{type2}</p>
        </div>
      </PokemonCardDetailStyled>
    </>
  );
};
