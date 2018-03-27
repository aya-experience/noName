import React from 'react';
import PropTypes from 'prop-types';
import COLOR from '../../constant';
import Button from '../Button';
import PaginationNumberList from './PaginationNumberList';

class Pagination extends React.Component {
  nextPageHandler = () => {
    const { currentPage, onChange } = this.props;
    onChange(currentPage + 1);
  };

  previousPageHandler = () => {
    const { currentPage, onChange } = this.props;
    onChange(currentPage - 1);
  };

  render() {
    const {
      currentPage, page, color, onChange, range,
    } = this.props;
    const classes = 'pagination is-centered';
    const noPrevious = currentPage === 1;
    const noAfter = currentPage === page;

    return (
      <nav className={classes}>
        <Button
          color={color}
          onClick={this.previousPageHandler}
          className="pagination-previous"
          disabled={noPrevious}
        >
          Previous
        </Button>
        <Button
          color={color}
          onClick={this.nextPageHandler}
          className="pagination-next"
          disabled={noAfter}
        >
          Next
        </Button>

        <PaginationNumberList
          range={range}
          currentPage={currentPage}
          page={100}
          onSelected={onChange}
          color={color}
        />
      </nav>
    );
  }
}

Pagination.propTypes = {
  onChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  color: PropTypes.oneOf(COLOR),
  range: PropTypes.number,
};

Pagination.defaultProps = {
  color: '',
  range: 2,
};

export default Pagination;
