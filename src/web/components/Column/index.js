import React from 'react';
import PropTypes from 'prop-types';

export default function Column({ children, size }) {
  const classes = `column${size ? ` is-${size}` : ''}`;

  return <div className={classes}>{children}</div>;
}

Column.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  size: PropTypes.number,
};

Column.defaultProps = {
  size: null,
};
