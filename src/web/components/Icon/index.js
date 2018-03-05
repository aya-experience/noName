import React from 'react';
import PropTypes from 'prop-types';

export default function Icon({ name, color, size }) {
  const containerclasses = `icon${color && ` has-text-${color}`}${size && ` is-${size}`}`;

  return (
    <span className={containerclasses}>
      <i className={name} />
    </span>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
};

Icon.defaultProps = {
  color: '',
  size: '',
};
