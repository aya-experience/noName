import React from 'react';
import { storiesOf } from '@storybook/react';
import Columns from '../../nextmaterial/src/web/old/components/Columns';
import Column from '../../nextmaterial/src/web/old/components/Column';

storiesOf('Columns', module)
  .add('with two columns', () => (
    <Columns>
      <Column>
        <p>First column</p>
      </Column>
      <Column>
        <p>Second column</p>
      </Column>
    </Columns>
  ))
  .add('with three columns', () => (
    <Columns>
      <Column>
        <p>First column</p>
      </Column>
      <Column>
        <p>Second column</p>
      </Column>
      <Column>
        <p>Third column</p>
      </Column>
    </Columns>
  ))
  .add('with size variation', () => (
    <Columns>
      <Column size={1}>
        <p>First column, size 1</p>
      </Column>
      <Column size={2}>
        <p>Second column, size 2</p>
      </Column>
      <Column size={3}>
        <p>Third column, size 3</p>
      </Column>
    </Columns>
  ));
