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
    position: absolute;
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

    @media (max-width: 905px) {
      .results {
        position: relative;
      }

      li {
        button {
          position: relative;
          right: 20px;
          width: 26px;
          padding: 7px 0;
          font-size: 0.7rem;
          margin: 0;
        }
      }

      .results-label {
        color: #000000;
        font-size: 0.4rem;
      }
    }
  }

  @media (max-width: 875px) {
    flex-direction: column;
    gap: 20px;
    padding: 0;

    .results {
      position: relative;
      display: flex;
      align-items: center;
      font-size: 1rem;
      margin-left: 0.4rem;

      label {
        display: flex;
        align-items: center;

        select {
          font-size: 0.8rem;
          padding: 6px 0px 4px 4px;
          border-radius: 15px;
          background-color: #9fa1e4;
          color: #000000;
          font-weight: 700;
        }

        option {
          border-radius: 50%;
        }
      }
    }

    .results-label {
      font-size: 1.2rem;
    }

    .buttons {
      position: relative;
      margin: 0;
      top: 120px;
      left: 20px;
    }

    li {
      button {
        position: relative;
        right: 26px;
        width: 26px;
        padding: 8px 0;
        border-radius: 50%;
        font-size: 0.9rem;
        margin: 0;
      }

      .active {
        background-color: #9fa1e4;
        color: #d33030;
        outline: none;
        border-radius: 50%;
      }
    }

    .searchBarContainer {
      display: flex;
      position: absolute;
      justify-content: right;
    }
  }

  .arrow-icon {
    color: #bcb8b8;
    font-size: 1rem;
    font-weight: 900;
  }
`;
