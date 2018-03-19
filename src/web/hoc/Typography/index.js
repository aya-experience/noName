import React from 'react';
import PropTypes from 'prop-types';

export default function typography(Component) {
  function Typography(props) {
    const {
      color, align, weight, transformation,
    } = props;

    const weightClass = weight && ` has-text-weight-${weight}`;
    const transformationClass = transformation && ` is-${transformation}`;
    const colorClass = color && ` has-text-${color}`;
    const alignClass = align && ` has-text-${align}`;
    const classes = `${weightClass}${transformationClass}${colorClass}${alignClass}`;

    return <Component {...props} className={classes} />;
  }

  Typography.propTypes = {
    color: PropTypes.string,
    align: PropTypes.oneOf(['', 'centered', 'justified', 'left', 'right']),
    weight: PropTypes.oneOf(['', 'light', 'normal', 'semibold', 'bold']),
    transformation: PropTypes.oneOf(['', 'capitalized', 'lowercase', 'uppercase', 'italic']),
  };

  Typography.defaultProps = {
    color: '',
    align: '',
    weight: '',
    transformation: '',
  };
  return Typography;
}
