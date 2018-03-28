import React from 'react';
import { storiesOf } from '@storybook/react';
import Menu from './../src/web/components/Menu';

const menu = {
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

storiesOf('Menu', module).add('Basic Menu', () => <Menu data={menu} />);
