import React from 'react';
import { storiesOf } from '@storybook/react';
import Title from './../src/web/components/Title';
import Subtitle from './../src/web/components/Subtitle';

storiesOf('Typography', module)
  .add('Title', () => [
    <Title>Default</Title>,
    <Title size={1}>Size 1</Title>,
    <Title size={2}>Size 2</Title>,
    <Title size={3}>Size 3</Title>,
    <Title size={4}>Size 4</Title>,
    <Title size={5}>Size 5</Title>,
    <Title size={6}>Size 6</Title>,
    <Title size={7}>Size 7</Title>,
  ])
  .add('Subtitle', () => [
    <Subtitle>Default</Subtitle>,
    <Subtitle level={1}>Size 1</Subtitle>,
    <Subtitle level={2}>Size 2</Subtitle>,
    <Subtitle level={3}>Size 3</Subtitle>,
    <Subtitle level={4}>Size 4</Subtitle>,
    <Subtitle level={5}>Size 5</Subtitle>,
  ]);
