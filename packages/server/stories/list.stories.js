import React from 'react';
import { storiesOf } from '@storybook/react';
import List from '../../nextmaterial/src/web/old/components/List';
import Item from '../../nextmaterial/src/web/old/components/Item';

const data = [
  { id: 'hashID1', className: 'hamtaro' },
  { id: 'hashID2', className: 'mickael' },
  { id: 'hashID3', className: 'aya' },
];

const renderItem = item => <Item key={item.id}>{item.className}</Item>;

storiesOf('List', module).add('Basic list', () => <List data={data} renderItem={renderItem} />);
