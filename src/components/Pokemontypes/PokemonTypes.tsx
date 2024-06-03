import { FC } from 'react';
import { pokeType } from '../../models/pokeType';
import styled from 'styled-components';

const TypeStyled = styled.div<Props>`
  width: 50px;
  height: 50px;
  display: flex;
  color: #9fa1e4;
  background-image: url('/assets/PokemonTypes3.webp');
  background-repeat: no-repeat;
  background-size: 300px;
  display: ${({ type }) => (type ? `block` : 'none')};
  background-position: ${({ type }) =>
    type
      ? `-${pokeType[type][1] * 50}px -${pokeType[type][0] * 50}px`
      : '50px 0px'};
`;

interface Props {
  type: keyof typeof pokeType | undefined;
}
const PokemonTypes: FC<Props> = ({ type }) => {
  return (
    <>
      <TypeStyled data-testid="type" type={type}></TypeStyled>
    </>
  );
};

export default PokemonTypes;
