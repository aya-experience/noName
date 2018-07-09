import React from 'react';
import { shallow } from 'enzyme';
import TreeNavigator from './index';
import TreeView from '../../components/TreeView/index';
import ViewInfo from '../../components/ViewInfo/index';

describe('TreeNavigator', () => {
  let tree;
  let wrapper;

  beforeEach(() => {
    tree = {
      name: 'Hello',
      props: {
        className: 'toto',
        pseudo: 'alfed',
      },
      children: [
        {
          className: 'Hello',
          props: {
            className: 'toto',
            pseudo: 'alfed',
            bigArray: ['TOTO', 4, 5, 6, ['roxor', 5, 5]],
          },
          children: [
            {
              className: 'Hello',
              props: {
                className: 'toto',
                pseudo: 'alfed',
              },
            },
            {
              className: 'Hello',
              props: {
                className: 'toto',
                pseudo: 'alfed',
              },
            },
            {
              className: 'Hello',
              props: {
                className: 'toto',
                pseudo: 'alfed',
              },
              children: [],
            },
          ],
        }, {
          className: 'Hello',
          props: {
            className: 'toto',
            pseudo: 'alfed',
          },
          children: [
            {
              className: 'Hello',
              props: {
                className: 'toto',
                pseudo: 'alfed',
              },
            },
            {
              className: 'Hello',
              props: {
                className: 'toto',
                pseudo: 'alfed',
              },
            },
            {
              className: 'Hello',
              props: {
                className: 'toto',
                pseudo: 'alfed',
              },
              children: [],
            },
          ],
        }, {
          className: 'Hello',
          props: {
            className: 'toto',
            pseudo: 'alfed',
          },
          children: [
            {
              className: 'Hello',
              props: {
                className: 'toto',
                pseudo: 'alfed',
              },
            },
            {
              className: 'Hello',
              props: {
                className: 'toto',
                pseudo: 'alfed',
              },
            },
            {
              className: 'Hello',
              props: {
                className: 'toto',
                pseudo: 'alfed',
              },
              children: [],
            },
          ],
        }, {
          className: 'Hello',
          props: {
            className: 'toto',
            pseudo: 'alfed',
          },
          children: [
            {
              className: 'Hello',
              props: {
                className: 'toto',
                pseudo: 'alfed',
              },
            },
            {
              className: 'Hello',
              props: {
                className: 'toto',
                pseudo: 'alfed',
              },
            },
            {
              className: 'Hello',
              props: {
                className: 'toto',
                pseudo: 'alfed',
              },
              children: [],
            },
          ],
        }, {
          className: 'Hello',
          props: {
            className: 'toto',
            pseudo: 'alfed',
          },
          children: [
            {
              className: 'Hello',
              props: {
                className: 'toto',
                pseudo: 'alfed',
              },
            },
            {
              className: 'Hello',
              props: {
                className: 'toto',
                pseudo: 'alfed',
              },
            },
            {
              className: 'Hello',
              props: {
                className: 'toto',
                pseudo: 'alfed',
              },
              children: [],
            },
          ],
        }, {
          className: 'Hello',
          props: {
            className: 'toto',
            pseudo: 'alfed',
          },
          children: [
            {
              className: 'Hello',
              props: {
                className: 'toto',
                pseudo: 'alfed',
              },
            },
            {
              className: 'Hello',
              props: {
                className: 'toto',
                pseudo: 'alfed',
              },
            },
            {
              className: 'Hello',
              props: {
                className: 'toto',
                pseudo: 'alfed',
              },
              children: [],
            },
          ],
        }, {
          className: 'Hello',
          props: {
            className: 'toto',
            pseudo: 'alfed',
          },
          children: [
            {
              className: 'Hello',
              props: {
                className: 'toto',
                pseudo: 'alfed',
              },
            },
            {
              className: 'Hello',
              props: {
                className: 'toto',
                pseudo: 'alfed',
              },
            },
            {
              className: 'Hello',
              props: {
                className: 'toto',
                pseudo: 'alfed',
              },
              children: [],
            },
          ],
        }, {
          className: 'Hello',
          props: {
            className: 'toto',
            pseudo: 'alfed',
          },
          children: [
            {
              className: 'Hello',
              props: {
                className: 'toto',
                pseudo: 'alfed',
              },
            },
            {
              className: 'Hello',
              props: {
                className: 'toto',
                pseudo: 'alfed',
              },
            },
            {
              className: 'Hello',
              props: {
                className: 'toto',
                pseudo: 'alfed',
              },
              children: [],
            },
          ],
        }, {
          className: 'Hello',
          props: {
            className: 'toto',
            pseudo: 'alfed',
          },
          children: [
            {
              className: 'Hello',
              props: {
                className: 'toto',
                pseudo: 'alfed',
              },
            },
            {
              className: 'Hello',
              props: {
                className: 'toto',
                pseudo: 'alfed',
              },
            },
            {
              className: 'Hello',
              props: {
                className: 'toto',
                pseudo: 'alfed',
              },
              children: [],
            },
          ],
        }, {
          className: 'Hello',
          props: {
            className: 'toto',
            pseudo: 'alfed',
          },
          children: [
            {
              className: 'Hello',
              props: {
                className: 'toto',
                pseudo: 'alfed',
              },
            },
            {
              className: 'Hello',
              props: {
                className: 'toto',
                pseudo: 'alfed',
              },
            },
            {
              className: 'Hello',
              props: {
                className: 'toto',
                pseudo: 'alfed',
              },
              children: [],
            },
          ],
        },
      ],
    };
    wrapper = shallow(<TreeNavigator tree={tree} />);
  });

  it('should render a TreeView with a tree and no selectedItem, and a method', () => {
    const treeView = wrapper.find(TreeView).first();
    const instance = wrapper.instance();
    expect(treeView.props()).toMatchObject({
      root: tree,
      selected: null,
      onClick: instance.onSelected,
    });
  });


  it('should render a TreeView with the selected item', () => {
    wrapper.setState({ current: tree.children[0] });
    const treeView = wrapper.find(TreeView).first();
    expect(treeView.prop('selected')).toBe(tree.children[0]);
  });

  it('should render a ViewInfo with the selected item', () => {
    wrapper.setState({ current: tree.children[0] });
    const viewInfo = wrapper.find(ViewInfo).first();
    expect(viewInfo.prop('value')).toBe(tree.children[0]);
  });


  it('should not render a ViewInfo with the selected item', () => {
    expect(wrapper.find(ViewInfo)).toHaveLength(0);
  });

  it('should update state with a new item', () => {
    const instance = wrapper.instance();
    instance.setState = jest.fn();
    instance.onSelected(tree);
    expect(instance.setState).toBeCalledWith({ current: tree });
  });

  it('should remove current when onSelected is call with the current item', () => {
    wrapper.setState({ current: tree });
    const instance = wrapper.instance();
    instance.setState = jest.fn();
    instance.onSelected(tree);
    expect(instance.setState).toBeCalledWith({ current: null });
  });
});
