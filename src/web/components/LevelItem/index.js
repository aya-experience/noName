import React from 'react';
import PropTypes from 'prop-types';

const LevelItem = ({ children }) => <div className="level-item">{children}</div>;

LevelItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};

export default LevelItem;
