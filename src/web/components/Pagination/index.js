import React from 'react';
import PropTypes from 'prop-types';
import COLOR from '../../constant';
import Button from '../Button';

const Pagination = ({
  onChange, currentPage, page, color,
}) => {
  const classes = 'pagination is-centered';
  const noPrevious = currentPage === 1;
  const noAfter = currentPage === page;
  const nextPage = currentPage + 1;
  const previousPage = currentPage - 1;

  const previousContent = !noPrevious && (
    <React.Fragment>
      {!(currentPage === 2) && (
        <React.Fragment>
          <li>
            <Button color={color} onClick={() => onChange(1)} className="pagination-link">
              1
            </Button>
          </li>
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
        </React.Fragment>
      )}
      <li>
        <Button color={color} onClick={() => onChange(previousPage)} className="pagination-link">
          {previousPage.toString()}
        </Button>
      </li>
    </React.Fragment>
  );

  const afterContent = !noAfter && (
    <React.Fragment>
      <li>
        <Button
          color={color}
          onClick={() => onChange(nextPage)}
          href="#no-anchor"
          className="pagination-link"
        >
          {nextPage.toString()}
        </Button>
      </li>
      {!(currentPage === page - 1) && (
        <React.Fragment>
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <Button color={color} onClick={() => onChange(page)} className="pagination-link">
              {page.toString()}
            </Button>
          </li>
        </React.Fragment>
      )}
    </React.Fragment>
  );

  // Update Link when PR #
  return (
    <nav className={classes} aria-label="pagination">
      <Button
        color={color}
        onClick={() => onChange(previousPage)}
        className="pagination-previous"
        disabled={noPrevious}
      >
        Previous
      </Button>
      <Button
        color={color}
        onClick={() => onChange(nextPage)}
        className="pagination-next"
        disabled={noAfter}
      >
        Next
      </Button>
      <ul className="pagination-list">
        {previousContent}
        <li>
          <Button
            color={color}
            onClick={() => null}
            className="pagination-link is-current"
            disabled
          >
            {currentPage.toString()}
          </Button>
        </li>
        {afterContent}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  onChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  color: PropTypes.oneOf(COLOR),
};

Pagination.defaultProps = {
  color: '',
};

export default Pagination;
