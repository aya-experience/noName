import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Tabs from '../src/web/components/Tabs';

const data = ['hello world', 'contact', 'about', 'test'];

storiesOf('Tabs', module)
  .add('Basic Tabs', () => <Tabs data={data} onSelected={action('Tabs')} index={0} />)
  .add('with size', () => [
    <Tabs data={data} size="small" onSelected={action('small')} index={0} />,
    <Tabs data={data} onSelected={action('default')} index={0} />,
    <Tabs data={data} size="medium" onSelected={action('medium')} index={0} />,
    <Tabs data={data} size="large" onSelected={action('large')} index={0} />,
  ]);
