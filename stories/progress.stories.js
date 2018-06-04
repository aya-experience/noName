import React from 'react';
import { storiesOf } from '@storybook/react';
import Progress from '../../nextmaterial/src/web/old/components/Progress';

storiesOf('Progress', module).add('basic progress', () => (
  <div>
    <Progress value={0} />
    <Progress value={25} />
    <Progress value={50} />
    <Progress value={75} />
    <Progress value={100} />
  </div>
));
