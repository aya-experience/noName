import React from 'react';
import { storiesOf } from '@storybook/react';
import Menu from './../src/web/components/Menu';

const menu = {
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

storiesOf('Menu', module).add('Basic Menu', () => <Menu data={menu} />);
