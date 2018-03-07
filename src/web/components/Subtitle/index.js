import React from 'react';
import PropTypes from 'prop-types';

export default function Subtitle({ children, level }) {
  const raisedLevel = level + 1;
  const classes = `subtitle is-${raisedLevel}`;
  const Heading = `h${raisedLevel}`;
  return <Heading className={classes}>{children}</Heading>;
}

Subtitle.propTypes = {
  children: PropTypes.string.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5]),
};

Subtitle.defaultProps = {
  level: 1,
};
