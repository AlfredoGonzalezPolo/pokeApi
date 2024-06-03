import { FC } from 'react';
import { pokeType } from '../../types/pokeType';

interface Props {
  type: keyof typeof pokeType | undefined;
}
const PokemonTypes: FC<Props> = ({ type }) => {
  return <>{type}</>;
};

export default PokemonTypes;
