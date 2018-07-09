import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { COLOR, COLOR_DEFAULT } from '../../constant.json';

const Title = (props) => {
  const {
    children, color, className, style,
  } = props;
  return (
    <Typography {...props} variant="headline" component="h1" className={className} style={style} color={color}>{children}</Typography>
  );
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf(COLOR),
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

Title.defaultProps = {
  color: COLOR_DEFAULT,
  className: 'title',
  style: {},
};

export default Title;
