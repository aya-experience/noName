import React from 'react';
import PropTypes from 'prop-types';
import Column from '../Column';

export default function Columns({ children }) {
  return <div className="columns">{children}</div>;
}

Columns.propTypes = {
  children: PropTypes.arrayOf(PropTypes.objectOf(Column)).isRequired,
};
