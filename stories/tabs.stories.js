import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Tabs from '../../nextmaterial/src/web/old/components/Tabs';
import Text from '../../nextmaterial/src/web/old/components/Text';

const data = [
  { key: 'Hello', component: () => <Text>Hello</Text> },
  { key: 'Bonjour', component: () => <Text>Bonjour</Text> },
  { key: 'Ciao', component: () => <Text>Ciao</Text> },
];

storiesOf('Tabs', module)
  .add('Basic Tabs', () => <Tabs data={data} onChange={action('Tabs')} />)
  .add('with size', () => [
    <Tabs data={data} size="small" onChange={action('small')} />,
    <Tabs data={data} onChange={action('default')} />,
    <Tabs data={data} size="medium" onChange={action('medium')} />,
    <Tabs data={data} size="large" onChange={action('large')} />,
  ]);
