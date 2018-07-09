import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { Information, AlertCircle, Alert } from 'mdi-material-ui';
import HighlightVariableText from '../../../components/HighlightVariableText/index';

const listItemStyle = {
  padding: '0 160px 0 5px',
  border: '1px solid rgb(240,240,240)',
};

const size = { fontSize: '0.8rem' };
const secondary = { paddingRight: '5px', ...size };
const icon = { fontSize: '1rem' };
const iconWarning = { color: '#ff7200', ...icon };

const types = {
  info: <Information color="primary" style={icon} />,
  error: <AlertCircle color="error" style={icon} />,
  warning: <Alert style={iconWarning} />,
  log: <Information color="action" style={icon} />,
};

const getIcon = type => types[type];

const LoggerJSLine = ({
  args, method,
}) => (
  <ListItem style={listItemStyle} >
    <ListItemText disableTypography style={size}>
      <HighlightVariableText value={args} />
    </ListItemText>
    <ListItemSecondaryAction style={secondary}>
      {getIcon(method)}
    </ListItemSecondaryAction>
  </ListItem>
);

LoggerJSLine.propTypes = {
  args: PropTypes.arrayOf(PropTypes.any).isRequired,
  method: PropTypes.string.isRequired,
};

export default LoggerJSLine;
