import React from 'react';
import { storiesOf } from '@storybook/react';
import Level from './../src/web/components/Level';
import LevelArea from './../src/web/components/LevelArea';
import LevelItem from './../src/web/components/LevelItem';
import { Text } from '../src/web/components/Text';

const item = [
  <LevelItem>
    <Text>React</Text>
  </LevelItem>,
  <LevelItem>
    <Text>Angular</Text>
  </LevelItem>,
  <LevelItem>
    <Text>VueJs</Text>
  </LevelItem>,
  <LevelItem>
    <Text>Polymer</Text>
  </LevelItem>,
];
storiesOf('Level', module)
  .add('Basic Level', () => <Level>{item}</Level>)
  .add('with Position', () => (
    <Level>
      <LevelArea position="right">{item}</LevelArea>
      <LevelArea position="left">{item}</LevelArea>
    </Level>
  ));
