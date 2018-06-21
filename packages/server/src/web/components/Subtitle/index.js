import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { COLOR, COLOR_DEFAULT } from '../../constant.json';

const Subtitle = (props) => {
  const {
    children, color, className, style, level,
  } = props;
  return (
    <Typography {...props} variant="title" component={`h${level + 1}`} className={className} style={style} color={color}>{children}</Typography>
  );
};

Subtitle.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf(COLOR),
  className: PropTypes.string,
  style: PropTypes.shape({}),
  level: PropTypes.oneOf([1, 2, 3, 4, 5]),
};

Subtitle.defaultProps = {
  color: COLOR_DEFAULT,
  className: 'title',
  style: {},
  level: 1,
};

export default Subtitle;
