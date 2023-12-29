import styled from 'styled-components';

export const PaginationStyled = styled.section`
  width: 100%;
  align-items: center;
  display: flex;
  padding: 1rem;

  .results {
    display: flex;
    position: relative;
    align-items: center;
    font-size: 1rem;
    margin-left: 1rem;

    label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    select {
      font-size: 1.2rem;
      border-radius: 0.5rem;
      background-color: #9fa1e4;
      font-weight: 800;
    }

    option {
      border-radius: 1rem;
    }

    .results-label {
      color: #000;
    }
  }
`;
