import React from 'react';
import PropTypes from 'prop-types';

export default function Content({ children, size }) {
  const className = `content${size && ` is-${size}`}`;
  return <div className={className}>{children}</div>;
}

Content.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  size: PropTypes.string,
};

Content.defaultProps = {
  size: '',
};
