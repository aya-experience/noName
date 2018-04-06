import React from 'react';
import PropTypes from 'prop-types';
import COLOR from '../../constant';

export default function colorify(Component) {
  function Color(props) {
    const { className, color } = props;
    const classes = (className && `${className}${color && ' '}`) + (color && `is-${color}`);
    return <Component {...props} className={classes} />;
  }

  Color.propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf(COLOR),
  };

  Color.defaultProps = {
    className: '',
    color: '',
  };

  return Color;
}
