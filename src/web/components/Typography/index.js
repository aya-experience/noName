import React from 'react';
import PropTypes from 'prop-types';

export default function Typography({
  children,
  size,
  tag,
  className,
  weight,
  transformation,
  color,
  align,
}) {
  const sizeClass = `${className && ' '}is-${size}`;
  const weightClass = ` has-text-weight-${weight}`;
  const transformationClass = transformation && ` is-${transformation}`;
  const colorClass = color && ` has-text-${color}`;
  const alignClass = align && ` has-text-${align}`;
  const classes = `${className}${sizeClass}${weightClass}${transformationClass}${colorClass}${alignClass}`;
  const Tag = tag;
  return <Tag className={classes}>{children}</Tag>;
}

Typography.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
  tag: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  className: PropTypes.string,
  color: PropTypes.string,
  align: PropTypes.oneOf(['', 'centered', 'justified', 'left', 'right']),
  weight: PropTypes.oneOf(['light', 'normal', 'semibold', 'bold']),
  transformation: PropTypes.oneOf(['', 'capitalized', 'lowercase', 'uppercase', 'italic']),
};

Typography.defaultProps = {
  size: 6,
  tag: 'p',
  className: '',
  color: '',
  align: '',
  weight: 'normal',
  transformation: '',
};
