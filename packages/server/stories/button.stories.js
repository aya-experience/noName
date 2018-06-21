import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../../nextmaterial/src/web/old/components/Button';
import Icon from '../../nextmaterial/src/web/old/components/Icon';

storiesOf('Button', module)
  .add('basic button', () => <Button onClick={action('button-click')}>Simple button</Button>)
  .add('with size', () => [
    <Button onClick={action('small')} size="small">
      Small button
    </Button>,
    <Button onClick={action('default')}>Default button</Button>,
    <Button onClick={action('medium')} size="medium">
      Medium button
    </Button>,
    <Button onClick={action('large')} size="large">
      Large button
    </Button>,
  ])
  .add('with color', () => [
    <Button onClick={action('default')}>Default button</Button>,
    <Button onClick={action('link')} color="link">
      Link button
    </Button>,
    <Button onClick={action('info')} color="info">
      Info button
    </Button>,
    <Button onClick={action('success')} color="success">
      Success button
    </Button>,
    <Button onClick={action('warning')} color="warning">
      Warning button
    </Button>,
    <Button onClick={action('danger')} color="danger">
      Danger button
    </Button>,
    <Button onClick={action('light')} color="light">
      Light button
    </Button>,
    <Button onClick={action('white')} color="white">
      White button
    </Button>,
    <Button onClick={action('dark')} color="dark">
      Dark button
    </Button>,
    <Button onClick={action('black')} color="black">
      Black button
    </Button>,
    <Button onClick={action('text')} color="text">
      Text button
    </Button>,
  ])
  .add('with icon', () => [
    <Button onClick={action('before-icon')}>
      <Icon name="ion-ionic" /> Before
    </Button>,
    <Button onClick={action('after-icon')}>
      After <Icon name="ion-home" />
    </Button>,
    <Button onClick={action('between-icon')}>
      <Icon name="ion-social-android" color="danger" /> 2 in same time
      <Icon name="ion-social-javascript" />
    </Button>,
    <Button onClick={action('only-icon')}>
      <Icon name="ion-social-octocat" color="info" />
    </Button>,
  ])
  .add('with disabled', () => (
    <Button onClick={action('disabled')} disabled>
      Diasbled button
    </Button>
  ))
  .add('with outlined', () => (
    <Button onClick={action('outlined')} outlined>
      Outlined button
    </Button>
  ))
  .add('with inverted', () => (
    <Button onClick={action('inverted')} inverted>
      Inverted button
    </Button>
  ))
  .add('with rounded', () => (
    <Button onClick={action('rounded')} rounded>
      Rounded button
    </Button>
  ))
  .add('with loading', () => (
    <Button onClick={action('loading')} loading>
      Loading button
    </Button>
  ));
