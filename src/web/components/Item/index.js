import React from 'react';
import PropTypes from 'prop-types';

export default function Item({ children }) {
  return <li>{children}</li>;
}

Item.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};
