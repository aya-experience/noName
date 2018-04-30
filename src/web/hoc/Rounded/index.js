import React from 'react';
import PropTypes from 'prop-types';

export default function roundable(Component) {
  function Rounded(props) {
    const { className, rounded } = props;
    const classes = (className && `${className}${rounded && ' '}`) + (rounded ? 'is-rounded' : '');
    return <Component {...props} className={classes} />;
  }

  Rounded.propTypes = {
    className: PropTypes.string,
    rounded: PropTypes.bool,
  };

  Rounded.defaultProps = {
    className: '',
    rounded: false,
  };

  return Rounded;
}
