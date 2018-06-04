import React from 'react';
import { shallow } from 'enzyme';
import TreeView from './index';
import ComponentView from '../ComponentView/index';

describe('TreeView', () => {
  let tree;
  let wrapper;
  let onClick;
  beforeEach(() => {
    onClick = jest.fn();
    tree = {
      name: 'toto',
      props: {},
      children: [
        {
          className: 'toto',
          props: {},

        }, {
          className: 'toto',
          props: {},

        }, {
          className: 'toto',
          props: {},

        }, {
          className: 'toto',
          props: {},
        },
      ],
    };
    wrapper = shallow(<TreeView root={tree} onClick={onClick} />);
  });

  it('should pass to component view root onclick', () => {
    expect(wrapper.find(ComponentView).first().props()).toMatchObject({
      value: tree, onClick,
    });
  });

  it('should pass false to ComponentView selected props by default', () => {
    expect(wrapper.find(ComponentView).first().prop('selected')).toBeFalsy();
  });

  it('should pass false to ComponentView selected props when selected is not same as root', () => {
    wrapper.setProps({ selected: tree.children[2] });
    expect(wrapper.find(ComponentView).first().prop('selected')).toBeFalsy();
  });

  it('should pass true to ComponentView selected props when selected is same as root', () => {
    wrapper.setProps({ selected: tree });
    expect(wrapper.find(ComponentView).first().prop('selected')).toBeTruthy();
  });

  it('should render 4 children', () => {
    const treeChilds = wrapper.find(TreeView);
    expect(treeChilds).toHaveLength(4);
  });

  it('should render pass to treeview children selected, onclick dans a new root value', () => {
    const treeChilds = wrapper.find(TreeView);
    expect(treeChilds.first().props()).toMatchObject({
      root: tree.children[0],
      onClick,
      selected: null,
    });
  });
});
