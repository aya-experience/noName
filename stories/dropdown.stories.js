import React from 'react';
import { storiesOf } from '@storybook/react';
import Dropdown from '../src/web/components/Dropdown';
import Text from '../src/web/components/Text';

const content = <div>Content of Dropdown</div>;

storiesOf('Dropdown', module).add('basic Dropdown', () => (
  <Dropdown content={content}>
    <Text>Dropdown</Text>
  </Dropdown>
));
