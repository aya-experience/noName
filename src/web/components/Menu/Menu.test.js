import React from 'react';
import { shallow } from 'enzyme';
import Menu from './';
import Text from '../Text';
import List from '../List';

describe('Menu', () => {
  let wrapper;
  let menuData;

  beforeEach(() => {
    // 3 level menu
    menuData = {
      name: 'Administration',
      items: [
        {
          name: 'User',
          items: [
            { name: 'List', link: '/user/list' },
            { name: 'Add', link: '/user/add' },
            { name: 'Remove', link: '/user/add' },
            { name: 'Update', link: '/user/add' },
            {
              name: 'Categories',
              items: [
                { name: 'List', link: '/user/category/list' },
                { name: 'Add', link: '/user/category/add' },
                { name: 'Remove', link: '/user/category/delete' },
                { name: 'Update', link: '/user/category/update' },
              ],
            },
          ],
        },
        { name: 'About', link: '/about' },
      ],
    };
    wrapper = shallow(<Menu data={menuData} />);
  });

  it('should render a title menu', () => {
    const title = wrapper.find(Text).first();
    expect(title.prop('children')).toBe(menuData.name);
  });

  it('should render a list with menu item', () => {
    const list = wrapper.find(List).first();
    expect(list.prop('data')).toBe(menuData.items);
  });

  it('should render a sub menu when a menu item have an another menu', () => {
    const subMenu = shallow(wrapper
      .find(List)
      .first()
      .prop('renderItem')(menuData.items[0]));
    expect(subMenu.find(List)).toHaveLength(1);
  });

  it("should render a Text component when the item menu doesn't have items", () => {
    const menuItem = wrapper
      .find(List)
      .first()
      .prop('renderItem')(menuData.items[1]);
    expect(shallow(menuItem.props.children).prop('children')).toBe(menuData.items[1].name);
  });
});
