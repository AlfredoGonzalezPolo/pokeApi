import { Dispatch, FC, SetStateAction } from 'react';
import { PaginationStyled } from './PaginationStyled';

interface Props {
  setPage: Dispatch<SetStateAction<number>>;
  setLimit: Dispatch<SetStateAction<number>>;
  page: number;
  maxPages: number;
}

const Pagination: FC<Props> = ({ setPage, setLimit, page, maxPages }) => {
  return (
    <PaginationStyled>
      <div className="results">
        <label className="results-label">
          Page results
          <select
            onChange={(e) => {
              setLimit(+e.currentTarget.value);
              setPage(0);
            }}
          >
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="150">150</option>
          </select>
        </label>
      </div>
    </PaginationStyled>
  );
};
export default Pagination;
