import React from 'react';
import PropTypes from 'prop-types';
import COLOR from '../../constant';
import Button from '../Button';
import PaginationNumberList from './PaginationNumberList';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: props.initialPage,
    };
  }

  setPage = (page) => {
    const { onChange } = this.props;
    this.setState({ currentPage: page });
    onChange(page);
  };

  nextPageHandler = () => {
    const { page } = this.props;
    const { currentPage } = this.state;
    if (currentPage < page) this.setPage(currentPage + 1);
  };

  previousPageHandler = () => {
    const { currentPage } = this.state;
    if (currentPage > 0) this.setPage(currentPage - 1);
  };

  render() {
    const { page, color, range } = this.props;
    const { currentPage } = this.state;
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
          onSelected={this.setPage}
          color={color}
        />
      </nav>
    );
  }
}

Pagination.propTypes = {
  onChange: PropTypes.func.isRequired,
  initialPage: PropTypes.number,
  page: PropTypes.number.isRequired,
  color: PropTypes.oneOf(COLOR),
  range: PropTypes.number,
};

Pagination.defaultProps = {
  color: '',
  initialPage: 1,
  range: 2,
};

export default Pagination;
