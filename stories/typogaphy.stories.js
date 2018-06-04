import React from 'react';
import { storiesOf } from '@storybook/react';
import Title from '../../nextmaterial/src/web/old/components/Title';
import Subtitle from '../../nextmaterial/src/web/old/components/Subtitle';
import Text from '../../nextmaterial/src/web/old/components/Text';
import LinkText from '../../nextmaterial/src/web/old/components/LinkText';

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
  ])
  .add('Text', () => [<Text>Hello world</Text>])
  .add('Link Text', () => [<LinkText href="#">Hello world</LinkText>])
  .add('with Color', () => [
    <Text color="">Default</Text>,
    <Text color="black">Black</Text>,
    <Text color="light">Light</Text>,
    <Text color="dark">Dark</Text>,
    <Text color="primary">Primary</Text>,
    <Text color="info">Info</Text>,
    <Text color="link">Link</Text>,
    <Text color="success">Success</Text>,
    <Text color="warning">Warning</Text>,
    <Text color="danger">Danger</Text>,
    <Text color="black-bis">Black bis</Text>,
    <Text color="black-ter">Black ter</Text>,
    <Text color="grey-darker">Grey darker</Text>,
    <Text color="grey-dark">Grey dark</Text>,
    <Text color="grey">Grey</Text>,
    <Text color="grey-light">Grey light</Text>,
    <Text color="grey-lighter">Grey lighter</Text>,
    <Text color="white-ter">white-ter</Text>,
    <Text color="white-bis">white-bis</Text>,
  ])
  .add('with Align', () => [
    <Text align="">Default</Text>,
    <Text align="centered">Centered</Text>,
    <Text align="justified">Justified</Text>,
    <Text align="left">Left</Text>,
    <Text align="right">Right</Text>,
  ])
  .add('with Transformation', () => [
    <Text transformation="">Default</Text>,
    <Text transformation="capitalized">Capitalized</Text>,
    <Text transformation="lowercase">Lowercase</Text>,
    <Text transformation="uppercase">Uppercase</Text>,
    <Text transformation="italic">Italic</Text>,
  ])
  .add('with Weight', () => [
    <Text color="">Default</Text>,
    <Text color="light">Light</Text>,
    <Text color="normal">Normal</Text>,
    <Text color="semibold">Semibold</Text>,
    <Text color="bold">Bold</Text>,
  ]);
