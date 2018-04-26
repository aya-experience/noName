import React from 'react';
import PropTypes from 'prop-types';
import ButtonToolBar from './ButtonToolBar';

const ToolBar = ({ data, onClick }) => {
  const buttonList = data.map(item => (
    <ButtonToolBar
      key={item.name}
      name={item.name}
      icon={item.icon}
      activated={item.activated}
      color={item.color}
      onClick={onClick}
    />
  ));
  return <div className="field has-addons">{buttonList}</div>;
};

ToolBar.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string,
    activated: PropTypes.bool.isRequired,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ToolBar;
