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
  const buttonNumbers = [page - 2, page - 1, page, page + 1, page + 2].filter(
    (buttonNumber) => buttonNumber >= 1 && buttonNumber <= maxPages
  );

  return (
    <PaginationStyled page={page}>
      <div className="results">
        <label className="results-label">
          Page results
          <select
            onChange={(e) => {
              setLimit(+e.currentTarget.value);
              setPage(1);
            }}
          >
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="150">150</option>
          </select>
        </label>
      </div>
      <ul className="buttons">
        <PaginationButton
          className="arrow"
          onClick={() => setPage(1)}
          disabled={page === 1}
        >
          <MdKeyboardArrowLeft className="arrow-icon" />
        </PaginationButton>

        <PaginationButton
          className="arrow"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          aria-label="Button to navigate through the paging"
        >
          <MdKeyboardArrowLeft
            className="arrow-icon"
            aria-label="Button to navigate through the paging"
          />
        </PaginationButton>
        {buttonNumbers.map((buttonNumber) => (
          <PaginationButton
            onClick={() => setPage(buttonNumber)}
            disabled={buttonNumber === page}
            className={buttonNumber === page ? 'active' : ''}
            key={buttonNumber}
            aria-label={`Button to navigate to page ${buttonNumber}`}
          >
            {buttonNumber}
          </PaginationButton>
        ))}

        <PaginationButton
          className="arrow"
          onClick={() => setPage(page + 1)}
          disabled={page === maxPages}
        >
          <MdKeyboardArrowRight className="arrow-icon" />
        </PaginationButton>

        <PaginationButton
          className="arrow"
          onClick={() => setPage(maxPages)}
          disabled={page === maxPages}
          aria-label="Button to navigate through the paging"
        >
          <MdKeyboardArrowRight className="arrow-icon" />
        </PaginationButton>
      </ul>
    </PaginationStyled>
  );
};

export default Pagination;
