/* eslint-disable
  jsx-a11y/anchor-is-valid,
  jsx-a11y/click-events-have-key-events,
  jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Touchable extends Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(event) {
    const { value, onClick } = this.props;
    if (value) return onClick(value);
    return onClick(event);
  }

  render() {
    const { children } = this.props;
    return <span onClick={this.onClickHandler}>{children}</span>;
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
