import React from 'react';
import PropTypes from 'prop-types';

export default function Item({ children, className }) {
  return <li className={className}>{children}</li>;
}

Item.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Item.defaultProps = {
  className: '',
};
