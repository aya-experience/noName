import React from 'react';
import PropTypes from 'prop-types';
import MaterialList from '@material-ui/core/List';
import clickable from '../../HOC/Clickable';
import List from '../List';

const ClickableList = (props) => {
  if (!props.onClick) {
    return <List {...props} />;
  }
  const {
    data, Component, style, className, onClick,
  } = props;
  const ClickableComponent = clickable(Component, onClick);
  return (
    <MaterialList style={style} className={className}>
      {data.map((item, index) => <ClickableComponent key={item.key || index} value={item} />)}
    </MaterialList>
  );
};

ClickableList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  Component: PropTypes.func.isRequired,
  style: PropTypes.shape({}),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

ClickableList.defaultProps = {
  style: {},
  className: '',
  onClick: null,
};

export default ClickableList;
