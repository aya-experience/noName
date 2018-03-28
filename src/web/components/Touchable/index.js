import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Touchable extends Component {
  onClickHandler = (event) => {
    const { value, onClick } = this.props;
    if (value) return onClick(value);
    return onClick(event);
  };

  render() {
    const { children } = this.props;
    return <a onClick={this.onClickHandler}>{children}</a>;
  }
}

Touchable.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
  ]),
};

Touchable.defaultProps = {
  value: undefined,
};
export default Touchable;
