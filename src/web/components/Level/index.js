import React from 'react';
import PropTypes from 'prop-types';

const Level = ({ children }) => <div className="level">{children}</div>;

Level.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
};

export default Level;
