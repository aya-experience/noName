import React from 'react';
import PropTypes from 'prop-types';

export default function Box({ children }) {
  return <div className="box">{children}</div>;
}

Box.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
};
