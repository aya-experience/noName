import React from 'react';
import PropTypes from 'prop-types';

export default function colorify(Component) {
  function Color(props) {
    const { className, color } = this.props;
    const classes = (className && `${className}${color && ' '}`) + (color && `is-${color}`);
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
