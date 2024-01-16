import styled from 'styled-components';
import { Props } from './PokemonCard';

export const PokemonCardStyled = styled.article<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  width: 250px;
  height: 300px;
  gap: 0.5rem;
  transition: transform 0.3s ease;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 20px;
  border: 2px solid #ced4da;
  border-radius: 15px;
  margin-bottom: 1rem;
  -webkit-box-shadow: 3px 6px 13px -1px rgba(11, 11, 11, 0.84);
  box-shadow: 3px 6px 13px -1px rgba(7, 7, 7, 0.84);
  background-color: transparent;

  &:hover {
    transform: scale(1.05);
    filter: brightness(0.9) saturate(0.5);
  }

  .pokemon-info {
    display: flex;
    width: 100%;
    align-items: center;
    padding: 10px 15px;
    justify-content: space-between;
    background-color: #9fa1e4;
    border-radius: 10px;

    h2 {
      font-size: 1.5rem;
    }
  }

  .pokemon-img {
    min-width: 120px;
    max-height: 180px;
  }
`;
