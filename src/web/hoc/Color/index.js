import React from 'react';
import PropTypes from 'prop-types';
import COLOR from '../../constant';

export default function colorify(Component) {
  function Color(props) {
    const classes = props.className + props.color && ` is-${props.color}`;
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
