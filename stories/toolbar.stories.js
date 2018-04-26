import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ToolBar from '../src/web/components/ToolBar';

const data = [
  { name: 'UIModule', activated: false, icon: 'ion-home' },
  { name: 'UnknowModule', activated: true, icon: 'ion-home' },
  { name: 'RTCEventEmitter', activated: false, icon: 'ion-home' },
];

const data2 = [
  {
    name: 'UIModule',
    activated: true,
    icon: 'ion-home',
    color: 'danger',
  },
  {
    name: 'UnknowModule',
    activated: true,
    icon: 'ion-home',
    color: 'success',
  },
  {
    name: 'RTCEventEmitter',
    activated: true,
    icon: 'ion-home',
    color: 'primary',
  },
];

storiesOf('Toolbar', module)
  .add('Basic Toolbar', () => <ToolBar data={data} onClick={action('toolbar')} />)
  .add('with Custom color', () => <ToolBar data={data2} onClick={action('toolbar')} />);
