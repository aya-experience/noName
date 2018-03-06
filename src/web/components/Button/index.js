import React from 'react';
import PropTypes from 'prop-types';

export default function Button({
  children,
  onClick,
  color,
  disabled,
  size,
  outlined,
  inverted,
  rounded,
  loading,
}) {
  const colorClass = color && ` is-${color}`;
  const sizeClass = size && ` is-${size}`;
  const outlinedClass = outlined ? ' is-outlined' : '';
  const invertedClass = inverted ? ' is-inverted' : '';
  const roundedClass = rounded ? ' is-rounded' : '';
  const loadingClass = loading ? ' is-loading' : '';
  const classes = `button${colorClass}${sizeClass}${outlinedClass}${invertedClass}${roundedClass}${loadingClass}`;
  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  outlined: PropTypes.bool,
  inverted: PropTypes.bool,
  rounded: PropTypes.bool,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  color: '',
  size: '',
  disabled: false,
  outlined: false,
  inverted: false,
  rounded: false,
  loading: false,
};
