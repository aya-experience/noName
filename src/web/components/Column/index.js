import React from 'react';
import PropTypes from 'prop-types';

export default function Column({ children, size }) {
  const classes = `column ${size > 0 && size < 12 ? `is-${size}` : ''}`;
  return <div className={classes}>{children}</div>;
}

Column.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  size: PropTypes.number,
};

Column.defaultProps = {
  size: 0,
};
