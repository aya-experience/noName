import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { LanguageJavascript, Cellphone } from 'mdi-material-ui';
import HighlightVariableText from '../../../components/HighlightVariableText/index';

const listItemStyle = {
  padding: '0 200px 0 5px',
  border: '1px solid rgb(240,240,240)',
};

const size = { fontSize: '0.8rem' };
const secondary = { paddingRight: '5px', ...size };
const icon = { fontSize: '0.9rem' };
const iconJs = { color: '#FFC107', ...icon };

const BridgeLine = ({
  type, args, module, method,
}) => (
  <ListItem style={listItemStyle} >
    <ListItemIcon>
      {type === 0 ? <LanguageJavascript style={iconJs} /> : <Cellphone style={icon} />}
    </ListItemIcon>
    <ListItemText disableTypography style={size}>
      <HighlightVariableText value={args} />
    </ListItemText>
    <ListItemSecondaryAction style={secondary}>
      <span className="hljs-title">{module}</span>@{method}
    </ListItemSecondaryAction>
  </ListItem>
);

BridgeLine.propTypes = {
  args: PropTypes.arrayOf(PropTypes.any).isRequired,
  type: PropTypes.number.isRequired,
  module: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
};

export default BridgeLine;
