import React from 'react';
import PropTypes from 'prop-types';

export default function List({ data, renderItem, className }) {
  if (!data.length) {
    return null;
  }

  const content = data.map((item, index) => renderItem(item, index));

  return <ul className={className}>{content}</ul>;
}

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  renderItem: PropTypes.func.isRequired,
  className: PropTypes.string,
};

List.defaultProps = {
  className: '',
};
