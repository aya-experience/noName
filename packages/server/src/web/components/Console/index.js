import React from 'react';
import PropTypes from 'prop-types';
import List from '../List';

const listStyle = height => ({
  padding: '0',
  overflowY: 'auto',
  height,
  wordBreak: 'break-all',
});
const Console = ({ data, ComponentLine, height }) => (
  <List data={data} Component={ComponentLine} style={listStyle(height)} />
);

Console.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  ComponentLine: PropTypes.func.isRequired,
  height: PropTypes.string,
};

Console.defaultProps = {
  height: '100%',
};

export default Console;

