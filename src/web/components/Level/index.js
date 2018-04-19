import React from 'react';
import PropTypes from 'prop-types';
import LevelArea from '../LevelArea';
import LevelItem from '../LevelItem';

const Level = ({ children }) => <div className="level">{children}</div>;

const LevelType = [LevelArea, LevelItem];

Level.propTypes = {
  children: PropTypes.oneOfType([...LevelType, ...LevelType.map(type => PropTypes.arrayOf(type))])
    .isRequired,
};

export default Level;
