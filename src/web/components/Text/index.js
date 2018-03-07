import React from 'react';
import PropTypes from 'prop-types';

export default function Text({ children }) {
  return <p>{children}</p>;
}

Text.propTypes = {
  children: PropTypes.string.isRequired,
};
