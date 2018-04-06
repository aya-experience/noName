import React from 'react';
import PropTypes from 'prop-types';

export default function sizable(Component) {
  const Size = (props) => {
    const { className, size } = props;
    const classes = className + (size && ` is-${size}`);
    return <Component {...props} className={classes.trim()} />;
  };

  Size.propTypes = {
    size: PropTypes.oneOf(['', 'small', 'medium', 'large']),
    className: PropTypes.string,
  };

  Size.defaultProps = {
    size: '',
    className: '',
  };

  return Size;
}
