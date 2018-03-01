import React from 'react';
import PropTypes from 'prop-types';

export default function Icon({ children, color, size }) {
  const containerclasses = `icon ${color ? `has-text-${color}` : ''} ${size ? `is-${size}` : ''}`;

  return (
    <span className={containerclasses}>
      <i className={children} />
    </span>
  );
}

Icon.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
};

Icon.defaultProps = {
  color: '',
  size: '',
};
