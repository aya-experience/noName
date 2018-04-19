import React from 'react';
import PropTypes from 'prop-types';
import colorify from '../../hoc/Color';
import roundable from '../../hoc/Rounded';

export const Tag = ({ children, className }) => {
  const classes = `tag${className && ` ${className}`}`;
  return <span className={classes}>{children}</span>;
};

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Tag.defaultProps = {
  className: '',
};

export default roundable(colorify(Tag));
