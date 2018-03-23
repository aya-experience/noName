import React from 'react';
import PropTypes from 'prop-types';

export default function colorify(Component) {
  function Color(props) {
    const classes = props.className + (props.color && ` is-${props.color}`);
    return <Component {...props} className={classes.trim()} />;
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
