import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const NetworkLine = ({ method, url }) => (
  <ListItem>
    <ListItemText
      primary={method}
    />
    <ListItemText
      primary={url}
    />
  </ListItem>
);

NetworkLine.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default NetworkLine;
