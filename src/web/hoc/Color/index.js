import React from 'react';
import PropTypes from 'prop-types';

export default function connect(Component) {
  function Color({ color, className, ...props }) {
    const classes = className + color && ` is-${color}`;
    return <Component {...props} className={classes} />;
  }

  Color.propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf([
      '',
      'white',
      'black',
      'light',
      'dark',
      'primary',
      'link',
      'info',
      'success',
      'warning',
      'danger',
    ]),
  };

  Color.defaultProps = {
    className: '',
    color: '',
  };

  return Color;
}
