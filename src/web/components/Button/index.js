import React from 'react';
import PropTypes from 'prop-types';
import colorify from '../../hoc/Color';
import sizable from '../../hoc/Size';

function Button({
  children, onClick, disabled, outlined, inverted, rounded, loading, className,
}) {
  const outlinedClass = outlined ? ' is-outlined' : '';
  const invertedClass = inverted ? ' is-inverted' : '';
  const roundedClass = rounded ? ' is-rounded' : '';
  const loadingClass = loading ? ' is-loading' : '';
  const classes = `button${outlinedClass}${invertedClass}${roundedClass}${loadingClass}${className &&
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
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  outlined: PropTypes.bool,
  inverted: PropTypes.bool,
  rounded: PropTypes.bool,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  disabled: false,
  outlined: false,
  inverted: false,
  rounded: false,
  loading: false,
};

const ColorButton = sizable(colorify(Button));
export { Button as ButtonBase, ColorButton as default };
