import React from 'react';
import PropTypes from 'prop-types';
import computeStyle from './sidebar.style';

const Sidebar = (props) => {
  const { children, content } = props;
  const style = computeStyle(props);
  return (
    <div style={style.container}>
      <div style={style.drawer}>{content}</div>
      {children}
    </div>
  );
};

Sidebar.propTypes = {
  children: PropTypes.element.isRequired,
  content: PropTypes.element.isRequired,
};

Sidebar.defaultProps = {};

export default Sidebar;
