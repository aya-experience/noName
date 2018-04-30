import React from 'react';
import Menu from '../../../components/Menu';

const menuData = {
  name: 'No Name',
  items: [
    { name: 'Home', link: '/' },
    { name: 'Console', link: '/console' },
    { name: 'UIManager', link: '/ui-manager' },
  ],
};

const index = () => <Menu data={menuData} />;

export default index;
