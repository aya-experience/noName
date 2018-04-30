import React from 'react';
import PropTypes from 'prop-types';

export default function Box({ children, className }) {
  const classes = `box${className && ` ${className}`}`;
  return <div className={classes}>{children}</div>;
}

Box.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  className: PropTypes.string,
};
Box.defaultProps = {
  className: '',
};
