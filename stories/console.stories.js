import React from 'react';
import { storiesOf } from '@storybook/react';
import Console from '../../nextmaterial/src/web/old/components/Console';

const data = [
  { module: 'hello', method: 'world', args: ['Marvin', 'Alexandre', 'Zenika'] },
  { module: 'RTCEventEmitter', method: 'click', args: [33.6, 46.5] },
  { module: 'RTCEventEmitter', method: 'click', args: [33.6, 46.5] },
];
storiesOf('Console', module).add('Basic Level', () => <Console data={data} />);
