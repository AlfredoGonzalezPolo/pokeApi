import styled from 'styled-components';

export const SearchBarStyled = styled.section`
  display: flex;
  justify-content: right;
  flex-direction: row;
  gap: 1.4rem;
  color: #ede7e7;
  margin-right: 0.5rem;

  .search-bar {
    display: flex;
    gap: 1.2rem;
  }

  .filter-form {
    margin-left: 6rem;
  }

  .select-input_button,
  .search-input_button {
    width: 60px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
    position: relative;
    left: 10px;
  }

  .select-input_button:hover,
  .search-input_button:hover {
    background-color: #c4c7f7;
  }

  .search-input {
    font-size: 0.8rem;
    padding: 0.3rem;
    cursor: text;
    outline: auto;
  }

  .search-input::placeholder {
    color: #fafafa;
    font-size: 1rem;
    font-family: inherit;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: center;
    font-size: small;

    .filter-form_select-container {
      padding: 0.5rem 1rem;
      background-color: #c4c7f7;
      box-shadow: 0 3px 15px 0 rgba(21, 21, 22, 0.37);
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.18);
    }

    .filter-form_select-container:hover {
      background-color: #f93939;
    }

    input,
    button,
    select {
      font-size: 0.9rem;
      background-color: transparent;
      border: 0;
      color: #000000;
      font-family: inherit;

      :focus {
        outline: none;
      }
      ::placeholder {
        color: #000000;
        font-size: 1rem;
      }
    }

    select {
      font-size: 1rem;
      margin-right: 0.8rem;
      cursor: pointer;
    }

    option {
      background-color: #f93939;
      color: #e0dcdc;
    }
  }

  @media (max-width: 1200px) {
    gap: 1rem;

    .filter-form {
      margin-left: 4rem;
    }

    .select-input_button,
    .search-input_button {
      width: 50px;
      height: 35px;
    }

    .search-input {
      font-size: 0.7rem;
      padding: 0.25rem;
    }

    .search-input::placeholder {
      font-size: 0.9rem;
    }

    label {
      font-size: 0.7rem;

      .filter-form_select-container {
        padding: 0.4rem 0.8rem;
      }

      input,
      button,
      select {
        font-size: 0.8rem;
      }
    }
  }

  @media (max-width: 900px) {
    gap: 0.8rem;

    .filter-form {
      margin-left: 3rem;
    }

    .select-input_button,
    .search-input_button {
      width: 45px;
      height: 30px;
    }

    .search-input {
      font-size: 0.6rem;
      padding: 0.2rem;
    }

    .search-input::placeholder {
      font-size: 0.8rem;
    }

    label {
      font-size: 0.6rem;

      .filter-form_select-container {
        padding: 0.3rem 0.6rem;
      }

      input,
      button,
      select {
        font-size: 0.7rem;
      }
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    margin-right: 0;

    .search-bar {
      flex-direction: column;
      gap: 1rem;
    }

    .filter-form {
      margin-left: 0;
    }

    .select-input_button,
    .search-input_button {
      width: 40px;
      height: 25px;
    }

    .search-input {
      font-size: 0.5rem;
      padding: 0.15rem;
    }

    .search-input::placeholder {
      font-size: 0.7rem;
    }

    label {
      font-size: 0.5rem;

      .filter-form_select-container {
        padding: 0.2rem 0.4rem;
      }

      input,
      button,
      select {
        font-size: 0.6rem;
      }
    }
  }
`;
