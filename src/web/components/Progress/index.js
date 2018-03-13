import React from 'react';
import PropTypes from 'prop-types';

const Progress = ({ value, max, className }) => {
  const classes = `progress${className && ` ${className}`}`;
  return <progress value={value} className={classes} max={max} />;
};

Progress.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  className: PropTypes.string,
};

Progress.defaultProps = {
  className: '',
  max: 100,
};

export default Progress;
