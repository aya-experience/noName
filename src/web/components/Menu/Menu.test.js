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
            { name: 'List' },
            { name: 'Add' },
            { name: 'Remove' },
            { name: 'Update' },
            {
              name: 'Categories',
              items: [{ name: 'List' }, { name: 'Add' }, { name: 'Remove' }, { name: 'Update' }],
            },
          ],
        },
        { name: 'About' },
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
    expect(subMenu.find(Menu)).toHaveLength(1);
  });

  it("should render a Text component when the item menu doesn't have items", () => {
    const menuItem = wrapper
      .find(List)
      .first()
      .prop('renderItem')(menuData.items[1]);
    expect(shallow(menuItem.props.children).prop('children')).toBe(menuData.items[1].name);
  });

  // TODO later
  // it('should trigger a click event when a title menu is clicked', () => {});
  // it('should trigger a click event when a sub menu is clicked', () => {});
});