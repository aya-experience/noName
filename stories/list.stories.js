import React from 'react';
import { storiesOf } from '@storybook/react';
import List from './../src/web/components/List';
import Item from './../src/web/components/Item';

const data = [
  { id: 'hashID1', name: 'hamtaro' },
  { id: 'hashID2', name: 'mickael' },
  { id: 'hashID3', name: 'aya' },
];

const renderItem = item => <Item key={item.id}>{item.name}</Item>;

storiesOf('List', module).add('Basic list', () => <List data={data} renderItem={renderItem} />);
