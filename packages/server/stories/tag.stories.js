import React from 'react';
import { storiesOf } from '@storybook/react';
import Tag from '../../nextmaterial/src/web/old/components/Tag';
import COLOR from '../../nextmaterial/src/web/old/constant';

storiesOf('Tag', module)
  .add('basic Tag', () => <Tag>My tag</Tag>)
  .add('rounded Tag', () => <Tag rounded>My tag</Tag>)
  .add('with color', () => COLOR.map(color => <Tag color={color}>My Tag {color}</Tag>));
