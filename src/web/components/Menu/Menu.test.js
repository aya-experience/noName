import React from 'react';
import { shallow } from 'enzyme';
import Menu from './';
import Subtitle from '../Subtitle';
import List from '../List';

it('Menu', () => {
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
    const title = wrapper.find(Subtitle).first();
    expect(title.prop('chidren')).toBe(menuData.name);
  });

  it('should render a list with menu item', () => {
    const list = wrapper.find(List).first();
    expect(list.prop('data')).toBe(menuData.items);
  });
  it('should render a sub menu when a menu item have an another menu', () => {
    const subMenu = wrapper.find(Menu).first();
    expect(subMenu.prop('data')).toBe(menuData.items[0]);
  });

  // TODO later
  // it('should trigger a click event when a title menu is clicked', () => {});
  // it('should trigger a click event when a sub menu is clicked', () => {});
});
