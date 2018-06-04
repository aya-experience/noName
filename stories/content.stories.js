import React from 'react';
import { storiesOf } from '@storybook/react';
import Content from '../../nextmaterial/src/web/old/components/Content';

const content = [
  <h1>Title</h1>,
  <p>Paragraph</p>,
  <h2>Subtitle</h2>,
  <ul>
    <li>item list 1</li>
    <li>item list 1</li>
  </ul>,
  <blockquote>blockquote</blockquote>,
];

storiesOf('Content', module)
  .add('with small size', () => <Content size="small">{content}</Content>)
  .add('with normal size', () => <Content>{content}</Content>)
  .add('with medium size', () => <Content size="medium">{content}</Content>)
  .add('with large size', () => <Content size="large">{content}</Content>);
