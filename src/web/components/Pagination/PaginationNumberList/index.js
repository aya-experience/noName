import React from 'react';
import PropTypes from 'prop-types';
import COLOR from '../../../constant';
import PaginationPageButton from '../PaginationPageButton';
import PaginationEllipsis from '../PaginationEllipsis';

const PaginationNumberList = ({
  page, onSelected, color, currentPage, range,
}) => {
  const rangeArray = Array.from(new Array(range), (val, index) => index + 1);
  const right = rangeArray.filter(value => currentPage + value < page - 1);
  const left = rangeArray.filter(value => currentPage - value > 1).reverse();
  return (
    <ul className="pagination-list">
      {currentPage > 1 && <PaginationPageButton color={color} value={1} onClick={onSelected} />}
      {currentPage > 2 && <PaginationEllipsis />}
      {left.map(value => (
        <PaginationPageButton
          key={value}
          color={color}
          value={currentPage - value}
          onClick={onSelected}
        />
      ))}
      <PaginationPageButton
        className="is-current"
        color={color}
        value={currentPage}
        onClick={onSelected}
        disabled
      />
      {right.map(value => (
        <PaginationPageButton
          key={value}
          color={color}
          value={currentPage + value}
          onClick={onSelected}
        />
      ))}
      {currentPage < page - 1 && <PaginationEllipsis />}
      {currentPage < page && (
        <PaginationPageButton color={color} value={page} onClick={onSelected} />
      )}
    </ul>
  );
};
PaginationNumberList.propTypes = {
  currentPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  onSelected: PropTypes.func.isRequired,
  range: PropTypes.number.isRequired,
  color: PropTypes.oneOf(COLOR).isRequired,
};

PaginationNumberList.defaultProps = {};

export default PaginationNumberList;
