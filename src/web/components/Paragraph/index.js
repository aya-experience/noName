import React from 'react';
import PropTypes from 'prop-types';

export default function Paragraph({ children }) {
  return <p>{children}</p>;
}

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
};
