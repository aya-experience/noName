import React from 'react';
import { storiesOf } from '@storybook/react';
import ComponentView from '../../nextmaterial/src/web/old/components/ComponentView';
import COLOR from '../../nextmaterial/src/web/old/constant';

const view = { className: 'RTCView', props: { color: 'blue', backgroundColor: 'red' } };
storiesOf('ComponentView', module)
  .add('Basic ComponentView', () => <ComponentView view={view} />)
  .add('with Colors', () => COLOR.map(color => <ComponentView view={view} color={color} />));
