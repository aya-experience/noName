import React from 'react';
import PropTypes from 'prop-types';
import ComponentView from '../ComponentView/index';

const TreeView = ({ root, onClick, selected }) => (
  <ComponentView value={root} selected={root === selected} onClick={onClick}>
    {root.children
      && root.children
      .map((child, index) => (<TreeView
        key={child.className + index.toString()}
        root={child}
        onClick={onClick}
        selected={selected}
      />))}
  </ComponentView>
);

TreeView.propTypes = {
  root: PropTypes.shape({ children: PropTypes.array }).isRequired,
  onClick: PropTypes.func,
  selected: PropTypes.shape({}),
};

TreeView.defaultProps = {
  selected: null,
  onClick: null,
};


export default TreeView;
