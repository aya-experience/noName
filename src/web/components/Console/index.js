import React from 'react';
import PropTypes from 'prop-types';
import List from '../List';
import Box from '../Box';
import ConsoleLine from './ConsoleLine';

const renderItem = (item, index) => <ConsoleLine data={item} key={index} />;

const Console = ({ data }) => (
  <Box>
    <List data={data} renderItem={renderItem} />
  </Box>
);

Console.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Console;
