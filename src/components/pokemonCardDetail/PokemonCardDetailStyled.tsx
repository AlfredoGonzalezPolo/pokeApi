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
    justify-content: space-between;
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

  @media (max-width: 884px) {
    padding: 3rem;
    padding-left: 6rem;
    margin: 10rem 0 0 14rem;

    .pokemon-info {
      padding: 8px 12px;

      h2 {
        font-size: 1.3rem;
      }
    }

    .pokemon-img {
      min-width: 100px;
      max-height: 150px;
    }

    .types {
      gap: 0.4rem;

      p {
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;
    padding-left: 4rem;
    margin: 8rem 0 0 10rem;

    .pokemon-info {
      padding: 6px 10px;

      h2 {
        font-size: 1.1rem;
      }
    }

    .pokemon-img {
      min-width: 80px;
      max-height: 120px;
    }

    .types {
      gap: 0.3rem;

      p {
        font-size: 0.8rem;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;
    padding-left: 2rem;
    margin: 6rem 0 0 5rem;

    .pokemon-info {
      padding: 4px 8px;

      h2 {
        font-size: 0.9rem;
      }
    }

    .pokemon-img {
      min-width: 60px;
      max-height: 100px;
    }

    .types {
      gap: 0.2rem;

      p {
        font-size: 0.7rem;
      }
    }
  }
`;
