/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const COLOR = ['inherit', 'primary', 'textSecondary', 'secondary', 'error', 'default'];

const Text = (props) => {
  const { children, align, color } = props;
  return (
    <Typography {...props} align={align} color={color} variant="body1" >{children}</Typography>
  );
};

Text.propTypes = {
  children: PropTypes.any,
  align: PropTypes.string,
  color: PropTypes.oneOf(COLOR),
};

Text.defaultProps = {
  align: 'inherit',
  color: 'default',
};

export default Text;
