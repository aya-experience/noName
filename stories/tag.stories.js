import React from 'react';
import { storiesOf } from '@storybook/react';
import Tag from '../src/web/components/Tag';
import COLOR from '../src/web/constant';

storiesOf('Tag', module)
  .add('basic Tag', () => <Tag>My tag</Tag>)
  .add('with color', () => COLOR.map(color => <Tag color={color}>My Tag {color}</Tag>));
