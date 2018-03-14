import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const Pagination = ({ onChange, currentPage, page }) => {
  const classes = 'pagination is-centered';
  const noPrevious = currentPage === 1;
  const noAfter = currentPage === page;

  const previousContent = !noPrevious && (
    <React.Fragment>
      <li>
        <Button className="pagination-link">1</Button>
      </li>
      <li>
        <span className="pagination-ellipsis">&hellip;</span>
      </li>
      <li>
        <Button className="pagination-link">{currentPage - 1}</Button>
      </li>
    </React.Fragment>
  );

  const afterContent = !noAfter && (
    <React.Fragment>
      <li>
        <Button href="#no-anchor" className="pagination-link">
          {currentPage + 1}
        </Button>
      </li>
      <li>
        <span className="pagination-ellipsis">&hellip;</span>
      </li>
      <li>
        <Button className="pagination-link">{page}</Button>
      </li>
    </React.Fragment>
  );

  // Update Link when PR #
  return (
    <nav className={classes} aria-label="pagination">
      <a href="#no-anchor" className="pagination-previous" disabled={noPrevious}>
        Previous
      </a>
      <a href="#no-anchor" className="pagination-next" disabled={noAfter}>
        Next
      </a>
      <ul className="pagination-list">
        {previousContent}
        <li>
          <Button className="pagination-link is-current" disabled>
            {currentPage}
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
};

export default Pagination;
