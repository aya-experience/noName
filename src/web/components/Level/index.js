import React from 'react';
import PropTypes from 'prop-types';
import LevelArea from '../LevelArea';
import LevelItem from '../LevelItem';

const Level = ({ children }) => <div className="level">{children}</div>;

const LevelType = PropTypes.oneOfType([
  PropTypes.instanceOf(LevelArea),
  PropTypes.instanceOf(LevelItem),
]);

Level.propTypes = {
  children: PropTypes.arrayOf(LevelType).isRequired,
};

export default Level;
