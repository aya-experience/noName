import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from '../../nextmaterial/src/web/old/components/Icon';

storiesOf('Icon', module)
  .add('basic icon', () => [
    <Icon name="ion-ionic" />,
    <Icon name="ion-home" />,
    <Icon name="ion-social-android" />,
    <Icon name="ion-social-javascript" />,
  ])
  .add('with size', () => [
    <Icon name="ion-ionic" size="small" />,
    <Icon name="ion-home" />,
    <Icon name="ion-social-android" size="medium" />,
    <Icon name="ion-social-javascript" size="large" />,
  ])
  .add('with color', () => [
    <Icon name="ion-ionic" />,
    <Icon name="ion-home" color="warning" />,
    <Icon name="ion-social-android" color="danger" />,
    <Icon name="ion-social-javascript" color="primary" />,
    <Icon name="ion-social-octocat" color="info" />,
    <Icon name="ion-android-happy" color="link" />,
  ]);
