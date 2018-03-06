import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/web/components/Button';
import Icon from '../src/web/components/Icon';

storiesOf('Button', module)
  .add('basic button', () => <Button>Simple button</Button>)
  .add('with size', () => [
    <Button size="small">Simple button</Button>,
    <Button>Simple button</Button>,
    <Button size="medium">Simple button</Button>,
    <Button size="large">Simple button</Button>,
  ])
  .add('with color', () => [
    <Button>Simple button</Button>,
    <Button color="link">Simple button</Button>,
    <Button color="info">Simple button</Button>,
    <Button color="success">Simple button</Button>,
    <Button color="warning">Simple button</Button>,
    <Button color="danger">Simple button</Button>,
    <Button color="light">Simple button</Button>,
    <Button color="white">Simple button</Button>,
    <Button color="dark">Simple button</Button>,
    <Button color="black">Simple button</Button>,
    <Button color="text">Simple button</Button>,
  ])
  .add('with icon', () => [
    <Button>
      <Icon name="ion-ionic" />Before
    </Button>,
    <Button>
      After<Icon name="ion-home" />
    </Button>,
    <Button>
      <Icon name="ion-social-android" color="danger" />2 in same time<Icon
        name="ion-social-javascript"
        color="primary"
      />
    </Button>,
    <Button>
      <Icon name="ion-social-octocat" color="info" />
    </Button>,
  ])
  .add('with disabled', () => <Button disabled>Simple button</Button>)
  .add('with outlined', () => <Button outlined>Simple button</Button>)
  .add('with inverted', () => <Button inverted>Simple button</Button>)
  .add('with rounded', () => <Button rounded>Simple button</Button>)
  .add('with loading', () => <Button loading>Simple button</Button>);
