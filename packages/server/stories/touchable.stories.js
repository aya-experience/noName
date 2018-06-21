import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import Touchable from '../../nextmaterial/src/web/old/components/Touchable';

storiesOf('Touchable', module).add('basic Touchable', () => (
  <Touchable value="isClicked" onClick={action('touchable')}>
    Click me
  </Touchable>
));
