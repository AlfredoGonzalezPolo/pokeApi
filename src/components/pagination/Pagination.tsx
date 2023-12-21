import { Dispatch, FC, SetStateAction } from 'react';
import { PaginationStyled } from './PaginationStyled';
import PaginationButton from '../paginationButtons/PaginationButtons';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
interface Props {
  setPage: Dispatch<SetStateAction<number>>;
  setLimit: Dispatch<SetStateAction<number>>;
  page: number;
  maxPages: number;
}

const Pagination: FC<Props> = ({ setPage, setLimit, page, maxPages }) => {
  const buttonNumbers = [page - 2, page - 1, page, page + 1, page + 2];

  return (
    <PaginationStyled>
      <ul className="buttons">
        <PaginationButton
          className="arrow"
          onClick={() => setPage(0)}
          disabled={page === 0}
        >
          <MdKeyboardArrowLeft className="arrow-icon" />
        </PaginationButton>

        <PaginationButton
          className="arrow"
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
          aria-label="Button to navigate through the paging"
        >
          <MdKeyboardArrowLeft
            className="arrow-icon"
            aria-label="Button to navigate through the paging"
          />
        </PaginationButton>
        {buttonNumbers.map((buttonNumber) =>
          buttonNumber >= 0 && buttonNumber <= maxPages ? (
            <PaginationButton
              onClick={(e) => setPage(+e.currentTarget.innerHTML)}
              disabled={buttonNumber === page}
              className={buttonNumber === page ? 'active' : ''}
              key={buttonNumber}
              aria-label="Button to navigate through the paging"
            >
              {buttonNumber}
            </PaginationButton>
          ) : (
            <PaginationButton
              className=""
              onClick={() => {}}
              disabled
              key={buttonNumber}
              aria-label="Button to navigate through the paging"
            >
              {buttonNumber}
            </PaginationButton>
          )
        )}

        <PaginationButton
          className="arrow"
          onClick={() => {
            setPage(page + 1);
          }}
          disabled={page === maxPages}
        >
          <MdKeyboardArrowRight className="arrow-icon" />
        </PaginationButton>
      </ul>
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
