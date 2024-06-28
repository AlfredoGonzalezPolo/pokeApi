import styled from 'styled-components';

interface StyledProps {
  page: number;
}

export const PaginationStyled = styled.section<StyledProps>`
  width: fit-content;
  display: flex;
  margin: 0 auto;
  width: 100%;
  padding: 0 2.2rem;
  align-items: center;
  margin: 1rem 0 2rem;

  .results {
    display: flex;
    position: relative;
    align-items: center;
    font-size: 1.2rem;
    margin-left: 0.4rem;

    label {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      select {
        font-size: 1rem;
        padding: 6px 0px 4px 4px;
        border-radius: 15px;
        background-color: #9fa1e4;
        color: #000000;
        font-weight: 700;
      }

      option {
        border-radius: 15px;
      }
    }
  }

  .results-label {
    color: #000000;
  }

  .buttons {
    width: fit-content;
    display: flex;
    margin: 0 auto;
    padding: 24px;
    margin-left: 260px;

    .arrow:hover {
      background: #c4c7f7;
    }

    li {
      button {
        width: 34px;
        border: none;
        border-radius: 50%;
        padding: 9px;
        background-color: transparent;
        font-weight: 700;
        cursor: pointer;
        color: #000000;

        button:hover {
          background: #c4c7f7;
          color: black;
        }
        :disabled:not(.arrow, .active) {
          color: transparent;
        }
        :hover:not(.active, :disabled) {
          background: #c4c7f7;
        }
      }
      .active {
        background-color: #9fa1e4;
        color: #000000;
        outline: none;
        border-radius: 50%;
      }
    }

    label select {
      background-color: white;
    }
  }

  .arrow-icon {
    color: #bcb8b8;
    font-size: 1rem;
    font-weight: 900;
  }

  @media (max-width: 1200px) {
    .results {
      font-size: 1rem;

      label select {
        font-size: 0.9rem;
      }
    }

    .buttons {
      padding: 20px;
      margin-left: 200px;

      li button {
        width: 30px;
        padding: 8px;
      }

      .arrow-icon {
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 900px) {
    .results {
      font-size: 0.9rem;

      label select {
        font-size: 0.8rem;
      }
    }

    .buttons {
      padding: 16px;
      margin-left: 160px;

      li button {
        width: 26px;
        padding: 7px;
      }

      .arrow-icon {
        font-size: 0.8rem;
      }
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;

    .results {
      font-size: 0.8rem;

      label select {
        font-size: 0.7rem;
      }
    }

    .buttons {
      padding: 12px;
      margin-left: 0;
      margin-top: 1rem;

      li button {
        width: 22px;
        padding: 6px;
      }

      .arrow-icon {
        font-size: 0.7rem;
      }
    }
  }
`;
