import React from 'react';
import PropTypes from 'prop-types';
import MaterialList from '@material-ui/core/List';

const List = ({
  data, Component, style, className,
}) => (
  <MaterialList style={style} className={className}>
    {data.map((item, index) => <Component key={item.key || index} {...item} />)}
  </MaterialList>
);

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  Component: PropTypes.func.isRequired,
  style: PropTypes.shape({}),
  className: PropTypes.string,
};

List.defaultProps = {
  style: {},
  className: '',
};

export default List;
