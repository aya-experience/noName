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
  active,
  rounded,
  loading,
  className,
}) {
  const colorClass = color && ` is-${color}`;
  const sizeClass = size && ` is-${size}`;
  const outlinedClass = outlined ? ' is-outlined' : '';
  const invertedClass = inverted ? ' is-inverted' : '';
  const roundedClass = rounded ? ' is-rounded' : '';
  const activeClass = active ? ' is-active' : '';
  const loadingClass = loading ? ' is-loading' : '';
  const classes = `button${colorClass}${sizeClass}${outlinedClass}${invertedClass}${roundedClass}${activeClass}${loadingClass}${className &&
    ` ${className}`}`;
  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  outlined: PropTypes.bool,
  inverted: PropTypes.bool,
  rounded: PropTypes.bool,
  active: PropTypes.bool,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  color: 'primary',
  className: '',
  size: '',
  disabled: false,
  outlined: false,
  inverted: false,
  rounded: false,
  active: false,
  loading: false,
};
