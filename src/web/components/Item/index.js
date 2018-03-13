import React from 'react';
import PropTypes from 'prop-types';

export default function Item({ content }) {
  return <li>{content}</li>;
}

Item.propTypes = {
  content: PropTypes.node.isRequired,
};
