import React from 'react';
import PropTypes from 'prop-types';

export default function Item({ item, render }) {
  return <li>{render(item)}</li>;
}

Item.propTypes = {
  item: PropTypes.shape({}).isRequired,
  render: PropTypes.func.isRequired,
};
