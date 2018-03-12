import React from 'react';
import PropTypes from 'prop-types';

const Progress = ({ value, className }) => {
  const classes = `progress${className && ` ${className}`}`;
  return <progress value={value} className={classes} />;
};

Progress.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Progress.defaultProps = {
  className: '',
};

export default Progress;
