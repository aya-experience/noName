import React from 'react';
import PropTypes from 'prop-types';

export default function Subtitle({ children, level }) {
  const classes = `subtitle${` is-${level}`}`;
  switch (level) {
    case 1:
      return <h2 className={classes}>{children}</h2>;
    case 2:
      return <h3 className={classes}>{children}</h3>;
    case 3:
      return <h4 className={classes}>{children}</h4>;
    case 4:
      return <h5 className={classes}>{children}</h5>;
    default:
      return <h6 className={classes}>{children}</h6>;
  }
}

Subtitle.propTypes = {
  children: PropTypes.string.isRequired,
  level: PropTypes.number,
};

Subtitle.defaultProps = {
  level: 1,
};
