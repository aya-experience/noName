import React from 'react';
import PropTypes from 'prop-types';

export default function Subtitle({ children, level, className }) {
  const raisedLevel = level + 1;
  const classes = `subtitle is-${raisedLevel} ${className}`;
  const Heading = `h${raisedLevel}`;
  return <Heading className={classes}>{children}</Heading>;
}

Subtitle.propTypes = {
  children: PropTypes.string.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5]),
  className: PropTypes.string,
};

Subtitle.defaultProps = {
  level: 1,
  className: '',
};
