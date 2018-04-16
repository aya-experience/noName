import React from 'react';
import PropTypes from 'prop-types';
import LevelItem from '../LevelItem';

const LevelArea = ({ children, position }) => <div className={`level-${position}`}>{children}</div>;

LevelArea.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(LevelItem), PropTypes.node]).isRequired,
  position: PropTypes.oneOf(['right', 'left']).isRequired,
};

export default LevelArea;
