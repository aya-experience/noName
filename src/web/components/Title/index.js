import React from 'react';
import PropTypes from 'prop-types';
import typography from '../../hoc/Typography';

export function Title({ children, size, className }) {
  const classes = `title is-${size}${className && ` ${className}`}`;
  return <h1 className={classes}>{children}</h1>;
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
};

Title.defaultProps = {
  size: 1,
  className: '',
};

export default typography(Title);
