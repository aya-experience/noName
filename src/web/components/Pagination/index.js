import React from 'react';
import PropTypes from 'prop-types';
import COLOR from '../../constant';
import Button from '../Button';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.nextPageHandler = () => {
      this.props.onChange(this.props.currentPage + 1);
    };

    this.previousPageHandler = () => {
      this.props.onChange(this.props.currentPage - 1);
    };

    this.firstPageHandler = () => {
      this.props.onChange(1);
    };

    this.lastPageHandler = () => {
      this.props.onChange(this.props.page);
    };

    this.currentPageHandler = () => null;
  }

  render() {
    const { currentPage, page, color } = this.props;
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
              <Button color={color} onClick={this.firstPageHandler} className="pagination-link">
                1
              </Button>
            </li>
            <li>
              <span className="pagination-ellipsis">&hellip;</span>
            </li>
          </React.Fragment>
        )}
        <li>
          <Button color={color} onClick={this.previousPageHandler} className="pagination-link">
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
            onClick={this.nextPageHandler}
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
              <Button color={color} onClick={this.lastPageHandler} className="pagination-link">
                {page.toString()}
              </Button>
            </li>
          </React.Fragment>
        )}
      </React.Fragment>
    );
    return (
      <nav className={classes} aria-label="pagination">
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
        <ul className="pagination-list">
          {previousContent}
          <li>
            <Button
              color={color}
              onClick={this.currentPageHandler}
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
  }
}

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
