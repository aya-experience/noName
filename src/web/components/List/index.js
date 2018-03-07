import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';

export default function List({ children }) {
  return <ul>{children}</ul>;
}

List.propTypes = {
  children: PropTypes.oneOfType([PropTypes.objectOf(Item), PropTypes.arrayOf(Item)]).isRequired,
};
