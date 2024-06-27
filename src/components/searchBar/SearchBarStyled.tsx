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
  @media (max-width: 1192px) {
    gap: 1rem;

    label {
      font-size: 0.5rem;

      input {
        width: 80px;
      }

      input,
      button,
      select {
        font-size: 0.6rem;
      }
    }

    .filter-form,
    .search-form {
      width: 180px;
      padding: 0;
      margin: 0;
    }

    .search-input::placeholder {
      color: #e5dfdf;
      width: fit-content;
      font-size: 0.6rem;
    }

    label {
      display: flex;
      flex-direction: column;
      gap: 6px;
      align-items: center;
      font-size: small;

      .filter-form_select-container,
      .search-form_input-container {
        padding: 0.2rem 0.2rem;
      }
    }

    .select-input_button,
    .search-input_button {
      width: 40px;
      height: 24px;
    }
  }

  @media (max-width: 1250px) {
    .search-bar {
      position: relative;
      left: 0px;
      gap: 30px;
      padding: 0;
      margin: 0;
    }

    .select-input_button,
    .search-input_button {
      width: 60px;
      height: 44px;
      position: relative;
      left: 0px;
      border-radius: 20px;
    }

    label {
      font-size: 1rem;
      margin: 0;
      padding: 0;
      width: max-content;

      input {
        width: 50px;
        justify-content: center;
        align-items: center;
      }

      input::placeholder {
        font-size: 0.01rem;
      }

      input,
      button,
      select {
        font-size: 0.6rem;
      }
    }

    .filter-form,
    .search-form {
      width: 120px;
      padding: 0;
      margin: 0;
    }

    .search-input::placeholder {
      color: #e5dfdf;
      width: fit-content;
      font-size: 0.6rem;
    }

    .select-input_button,
    .search-input_button {
      width: 40px;
      height: 24px;
    }

    .search-input {
      font-size: 0.6rem;
      padding: 0.2rem;
    }
  }

  @media (max-width: 1192px) {
    .search-bar {
      position: relative;
      top: 0px;
      left: 10px;
      gap: 8px;
      padding: 0;
      margin: 0;
    }
  }

  @media (max-width: 875px) {
    .search-bar {
      position: relative;
      top: 30px;
      left: 10px;
      gap: 8px;
      padding: 0;
      margin: 0;
    }
  }

  @media (max-width: 600px) {
    .search-bar {
      position: relative;
      flex-direction: row;
      justify-content: center;
      top: 30px;
      left: 20px;
      padding-right: 50px;
      margin: 0;
    }

    .search-form {
      position: relative;
      left: 18px;
    }

    .search-form label {
      margin-right: 8px;
    }

    label {
      font-size: 1rem;
      margin: 0;
      padding: 0;
      width: max-content;

      input {
        width: 50px;
        justify-content: center;
        align-items: center;
      }

      input::placeholder {
        font-size: 0.01rem;
      }

      input,
      button,
      select {
        font-size: 0.6rem;
      }
    }

    .filter-form,
    .search-form {
      width: 120px;
      padding: 0;
      margin: 0;
    }

    .search-input::placeholder {
      color: #e5dfdf;
      width: fit-content;
      font-size: 0.6rem;
    }

    .select-input_button,
    .search-input_button {
      width: 40px;
      height: 24px;
    }

    .search-input {
      font-size: 0.6rem;
      padding: 0.2rem;
    }
  }

  @media (max-width: 475px) {
    .search-bar {
      display: flex;
      position: relative;
      margin-right: 50px;
      gap: 70px;
      top: 14px;
    }

    .select-input_button,
    .search-input_button {
      width: 60px;
      height: 40px;
      padding: 0.3rem;
      border-radius: 20px;
      position: relative;
      left: 4px;
      font-size: 0.9rem;
    }

    .search-input {
      font-size: 1.2rem;
      padding: 0.2rem;
    }

    .search-input::placeholder {
      font-size: 1rem;
      font-family: inherit;
    }

    label {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: small;
      gap: 6px;

      .filter-form_select-container {
        padding: 0.2rem 0.4rem;
        background-color: #424141;
        box-shadow: 0 3px 15px 0 rgba(21, 21, 22, 0.37);
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.18);
      }

      .filter-form_select-container:hover {
        background-color: #212121;
      }

      input {
        width: 100px;
        cursor: default;
      }

      input,
      button,
      select {
        font-size: 0.9rem;
        background-color: transparent;
        border: 0;
        color: #f5f3f3;
        font-family: inherit;

        :focus {
          outline: none;
        }
        ::placeholder {
          color: #e5dfdf;
          font-size: 1rem;
        }
      }

      select {
        font-size: 1.1rem;
        margin-right: 0.8rem;
      }

      option {
        background-color: #cc4e4e;
        color: #e0dcdc;
      }
    }
  }
`;
