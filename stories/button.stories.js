import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../src/web/components/Button';
import Icon from '../src/web/components/Icon';

storiesOf('Button', module)
  .add('basic button', () => <Button onClick={action('button-click')}>Simple button</Button>)
  .add('with size', () => [
    <Button onClick={action('button-click1')} size="small">
      Simple button
    </Button>,
    <Button onClick={action('button-click2')}>Simple button</Button>,
    <Button onClick={action('button-click3')} size="medium">
      Simple button
    </Button>,
    <Button onClick={action('button-click4')} size="large">
      Simple button
    </Button>,
  ])
  .add('with color', () => [
    <Button onClick={action('button-click1')}>Simple button</Button>,
    <Button onClick={action('button-click2')} color="link">
      Simple button
    </Button>,
    <Button onClick={action('button-click3')} color="info">
      Simple button
    </Button>,
    <Button onClick={action('button-click4')} color="success">
      Simple button
    </Button>,
    <Button onClick={action('button-click5')} color="warning">
      Simple button
    </Button>,
    <Button onClick={action('button-click6')} color="danger">
      Simple button
    </Button>,
    <Button onClick={action('button-click7')} color="light">
      Simple button
    </Button>,
    <Button onClick={action('button-click8')} color="white">
      Simple button
    </Button>,
    <Button onClick={action('button-click9')} color="dark">
      Simple button
    </Button>,
    <Button onClick={action('button-click10')} color="black">
      Simple button
    </Button>,
    <Button onClick={action('button-click11')} color="text">
      Simple button
    </Button>,
  ])
  .add('with icon', () => [
    <Button onClick={action('button-click1')}>
      <Icon name="ion-ionic" /> Before
    </Button>,
    <Button onClick={action('button-click2')}>
      After <Icon name="ion-home" />
    </Button>,
    <Button onClick={action('button-click3')}>
      <Icon name="ion-social-android" color="danger" /> 2 in same time{' '}
      <Icon name="ion-social-javascript" />
    </Button>,
    <Button onClick={action('button-click4')}>
      <Icon name="ion-social-octocat" color="info" />
    </Button>,
  ])
  .add('with disabled', () => (
    <Button onClick={action('button-click')} disabled>
      Simple button
    </Button>
  ))
  .add('with outlined', () => (
    <Button onClick={action('button-click')} outlined>
      Simple button
    </Button>
  ))
  .add('with inverted', () => (
    <Button onClick={action('button-click')} inverted>
      Simple button
    </Button>
  ))
  .add('with rounded', () => (
    <Button onClick={action('button-click')} rounded>
      Simple button
    </Button>
  ))
  .add('with loading', () => (
    <Button onClick={action('button-click')} loading>
      Simple button
    </Button>
  ));
