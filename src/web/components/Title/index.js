import React from 'react';
import PropTypes from 'prop-types';

export default function Title({ children, size }) {
  const classes = `title is-${size}`;
  return <h1 className={classes}>{children}</h1>;
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.number,
};

Title.defaultProps = {
  size: 3,
};
