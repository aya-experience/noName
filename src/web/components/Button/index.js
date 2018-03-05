import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

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
  icon,
}) {
  const classes = `button${color && ` is-${color}`}${size && ` is-${size}`}${
    outlined ? ' is-outlined' : ''
  }${inverted ? ' is-inverted' : ''}${rounded ? ' is-rounded' : ''}${loading ? ' is-loading' : ''}`;
  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      {icon && <Icon name={icon} />}
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
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  outlined: PropTypes.bool,
  inverted: PropTypes.bool,
  rounded: PropTypes.bool,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  color: '',
  size: '',
  icon: '',
  disabled: false,
  outlined: false,
  inverted: false,
  rounded: false,
  loading: false,
};
