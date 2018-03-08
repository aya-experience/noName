import React from 'react';
import PropTypes from 'prop-types';

export default function Text({ children, className }) {
  return <p className={className}>{children}</p>;
}

Text.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Text.defaultProps = {
  className: '',
};
