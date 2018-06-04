import React from 'react';
import { storiesOf } from '@storybook/react';
import Menu from '../../nextmaterial/src/web/old/components/Menu';

const menu = {
  name: 'Administration',
  items: [
    {
      className: 'User',
      items: [
        { className: 'List', link: '/user/list' },
        { className: 'Add', link: '/user/add' },
        { className: 'Remove', link: '/user/add' },
        { className: 'Update', link: '/user/add' },
        {
          className: 'Categories',
          items: [
            { className: 'List', link: '/user/category/list' },
            { className: 'Add', link: '/user/category/add' },
            { className: 'Remove', link: '/user/category/delete' },
            { className: 'Update', link: '/user/category/update' },
          ],
        },
      ],
    },
    { className: 'About', link: '/about' },
  ],
};

storiesOf('Menu', module).add('Basic Menu', () => <Menu data={menu} />);
