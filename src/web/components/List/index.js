import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';

export default function List({ data, renderItem, keyName }) {
  if (data.length < 1) {
    return null;
  }
  const content = data.map((item, index) => {
    const keyValue = keyName ? item[keyName] : index;
    return <Item item={item} key={keyValue} render={renderItem} />;
  });

  return <ul>{content}</ul>;
}

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderItem: PropTypes.func.isRequired,
  keyName: PropTypes.string,
};

List.defaultProps = {
  keyName: '',
};
