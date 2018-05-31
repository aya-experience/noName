import React from 'react';
import { storiesOf } from '@storybook/react';
import Level from '../src/web/old/components/Level';
import LevelArea from '../src/web/old/components/LevelArea';
import LevelItem from '../src/web/old/components/LevelItem';
import { Text } from '../src/web/old/components/Text';

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
