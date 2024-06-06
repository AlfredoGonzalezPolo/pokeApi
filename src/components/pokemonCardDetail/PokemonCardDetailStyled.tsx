import styled from 'styled-components';
import { Props } from './PokemonCardDetail';

export const PokemonCardDetailStyled = styled.article<Props>`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 5rem;
  padding-left: 10rem;
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
  margin: 12rem 0 0 19rem;

  .pokemon-info {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px 15px;
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
  .types {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    p {
      color: #000000;
    }
  }
`;
