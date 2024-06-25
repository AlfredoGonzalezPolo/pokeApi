import { useNavigate } from 'react-router-dom';
import { pokeType } from '../../models/pokeType';
import { SearchBarStyled } from './SearchBarStyled';

export function SearchBar() {
  const navigate = useNavigate();

  const handleSearchForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem('id') as HTMLInputElement;
    navigate(`/${input.value.toLowerCase()}`);
    input.value = '';
  };

  const handleTypeForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem(
      'type'
    ) as HTMLInputElement;
    navigate(`/filter/${input.value.toLowerCase()}`);
  };
  return (
    <>
      <SearchBarStyled>
        <div className="search-bar">
          <form className="filter-form" onSubmit={handleTypeForm}>
            <label>
              <div className="filter-form_select-container">
                <select name="type">
                  {Object.keys(pokeType).map(
                    (type) =>
                      type !== 'undefined' && <option key={type}>{type}</option>
                  )}
                </select>
                <button
                  type="submit"
                  className="filter-form_select-container_button"
                >
                  FILTER
                </button>
              </div>
            </label>
          </form>
          <form onSubmit={handleSearchForm} className="search-form">
            <label>
              <div className="search-form_input-container">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Name or id..."
                  name="id"
                  autoComplete="on"
                />
                <button className="search-input_button" type="submit">
                  SEARCH
                </button>
              </div>
            </label>
          </form>
        </div>
      </SearchBarStyled>
    </>
  );
}
