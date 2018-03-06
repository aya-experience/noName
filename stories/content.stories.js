import React from 'react';
import { storiesOf } from '@storybook/react';
import Content from './../src/web/components/Content';
import Container from './../src/web/components/Container';

// TODO remove html entities when they are implemented
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
  .add('with small size', () => (
    <Container>
      <Content size="small">{content}</Content>
    </Container>
  ))
  .add('with normal size', () => (
    <Container>
      <Content>{content}</Content>
    </Container>
  ))
  .add('with medium size', () => (
    <Container>
      <Content size="medium">{content}</Content>
    </Container>
  ))
  .add('with large size', () => (
    <Container>
      <Content size="large">{content}</Content>
    </Container>
  ));
