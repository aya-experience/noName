import React from 'react';
import PropTypes from 'prop-types';
import ClickableList from '../ClickableList';

const listStyle = height => ({
  padding: '0',
  overflowY: 'auto',
  height,
  wordBreak: 'break-all',
});

const Console = ({
  data, ComponentLine, height, onClick,
}) => (
  <ClickableList
    data={data}
    Component={ComponentLine}
    onClick={onClick}
    style={listStyle(height)}
  />
);

Console.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  ComponentLine: PropTypes.func.isRequired,
  height: PropTypes.string,
  onClick: PropTypes.func,
};

Console.defaultProps = {
  height: '100%',
  onClick: null,
};

export default Console;

