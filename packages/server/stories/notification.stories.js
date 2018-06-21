import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Notification from '../../nextmaterial/src/web/old/components/Notification';
import Text from '../../nextmaterial/src/web/old/components/Text';

storiesOf('Notification', module)
  .add('basic notification', () => (
    <Notification>
      <Text>Hello world</Text>
      <Text>
        Laborum deserunt ut duis reprehenderit anim officia aliquip irure consectetur fugiat
        consequat dolore dolore nisi. Sit est voluptate enim id. Esse cillum in officia incididunt
        adipisicing non elit cupidatat. Eiusmod excepteur consectetur laboris adipisicing enim anim
        aliquip consectetur ea incididunt laborum incididunt voluptate. Adipisicing laboris deserunt
        ullamco ipsum nisi elit incididunt ex labore minim commodo. Eiusmod tempor elit officia
        aliqua excepteur.
      </Text>
    </Notification>
  ))
  .add('with a close button', () => (
    <Notification onClose={action('close')}>
      <Text>Hello world</Text>
      <Text>
        Laborum deserunt ut duis reprehenderit anim officia aliquip irure consectetur fugiat
        consequat dolore dolore nisi. Sit est voluptate enim id. Esse cillum in officia incididunt
        adipisicing non elit cupidatat. Eiusmod excepteur consectetur laboris adipisicing enim anim
        aliquip consectetur ea incididunt laborum incididunt voluptate. Adipisicing laboris deserunt
        ullamco ipsum nisi elit incididunt ex labore minim commodo. Eiusmod tempor elit officia
        aliqua excepteur.
      </Text>
    </Notification>
  ))
  .add('with a color', () => (
    <Notification color="danger" onClose={action('color')}>
      <Text>Hello world</Text>
      <Text>
        Laborum deserunt ut duis reprehenderit anim officia aliquip irure consectetur fugiat
        consequat dolore dolore nisi. Sit est voluptate enim id. Esse cillum in officia incididunt
        adipisicing non elit cupidatat. Eiusmod excepteur consectetur laboris adipisicing enim anim
        aliquip consectetur ea incididunt laborum incididunt voluptate. Adipisicing laboris deserunt
        ullamco ipsum nisi elit incididunt ex labore minim commodo. Eiusmod tempor elit officia
        aliqua excepteur.
      </Text>
    </Notification>
  ));
