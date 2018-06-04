/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import HighlightVariableText from '../HighlightVariableText/index';
import Text from '../Text/index';

const styles = {
  item: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  attribut: {
    flexShrink: '0',
  },
  value: {
    flexGrow: '1',
  },
};

const AttributItemList = ({ attribut, value }) => (
  <ListItem style={styles.items} dense disableGutters>
    <Text style={styles.attribut} className="hljs-attr">{attribut} :</Text>
    <HighlightVariableText noWrap style={styles.value} value={value} />
  </ListItem>
);

AttributItemList.propTypes = {
  attribut: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
};

export default AttributItemList;
