import React from 'react';
import { storiesOf } from '@storybook/react';
import List from './../src/web/components/List';

const data = [
  { id: 'hashID1', name: 'hamtaro' },
  { id: 'hashID2', name: 'mickael' },
  { id: 'hashID3', name: 'aya' },
];

const renderItem = item => <div>{item.name}</div>;

storiesOf('List', module)
  .add('Basic list', () => <List data={data} renderItem={renderItem} />)
  .add('Using personalized Key', () => <List data={data} renderItem={renderItem} keyName="id" />);
