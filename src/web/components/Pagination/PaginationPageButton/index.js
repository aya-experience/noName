import React from 'react';
import PropTypes from 'prop-types';
import COLOR from '../../../constant';
import Button from '../../Button';

const style = {
  
}

class PaginationPageButton extends React.Component {
  onClickHandler = () => {
    const { value, onClick } = this.props;
    onClick(value);
  };

  render() {
    const {
      value, color, disabled, classNames,
    } = this.props;
    return (
      <li>
        <Button
          className={classNames}
          onClick={this.onClickHandler}
          color={color}
          disabled={disabled}
        >
          {value.toString()}
        </Button>
      </li>
    );
  }
}

PaginationPageButton.propTypes = {
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.oneOf(COLOR).isRequired,
  disabled: PropTypes.bool,
  classNames: PropTypes.string,
};

PaginationPageButton.defaultProps = {
  disabled: false,
  classNames: '',
};

export default PaginationPageButton;
