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
    /* background-color: #212020; */
    cursor: pointer;
    position: relative;
    left: 10px;
  }

  .select-input_button:hover,
  .search-input_button:hover {
    background-color: #c4c7f7;
  }

  .select-input_button:hover {
    cursor: pointer;
  }

  .search-input {
    font-size: 0.8rem;
    padding: 0.3rem;
    cursor: text;
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
`;
