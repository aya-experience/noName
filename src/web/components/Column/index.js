import React from 'react';
import PropTypes from 'prop-types';

export default function Column({ children, size, narrow }) {
  const classes = `column${size ? ` is-${size}` : ''}${narrow ? ' is-narrow' : ''}`;

  return <div className={classes}>{children}</div>;
}

Column.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  size: PropTypes.number,
  narrow: PropTypes.bool,
};

Column.defaultProps = {
  size: null,
  narrow: false,
};
