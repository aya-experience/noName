import React from 'react';
import PropTypes from 'prop-types';

export default function List({ data, renderItem }) {
  if (!data.length) {
    return null;
  }

  const content = data.map((item, index) => renderItem(item, index));

  return <ul>{content}</ul>;
}

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderItem: PropTypes.func.isRequired,
};
