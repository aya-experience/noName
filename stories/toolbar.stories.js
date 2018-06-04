import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ToolBar from '../../nextmaterial/src/web/old/components/ToolBar';

const data = [
  { className: 'UIModule', activated: false, icon: 'ion-home' },
  { className: 'UnknowModule', activated: true, icon: 'ion-home' },
  { className: 'RTCEventEmitter', activated: false, icon: 'ion-home' },
];

const data2 = [
  {
    className: 'UIModule',
    activated: true,
    icon: 'ion-home',
    color: 'danger',
  },
  {
    className: 'UnknowModule',
    activated: true,
    icon: 'ion-home',
    color: 'success',
  },
  {
    className: 'RTCEventEmitter',
    activated: true,
    icon: 'ion-home',
    color: 'primary',
  },
];

storiesOf('Toolbar', module)
  .add('Basic Toolbar', () => <ToolBar data={data} onClick={action('toolbar')} />)
  .add('with Custom color', () => <ToolBar data={data2} onClick={action('toolbar')} />);
