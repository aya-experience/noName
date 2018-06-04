import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Pagination from '../../nextmaterial/src/web/old/components/Pagination';
import COLOR from '../../nextmaterial/src/web/old/constant';

storiesOf('Pagination', module)
  .add('basic Pagination', () => (
    <React.Fragment>
      <Pagination page={100} initialPage={50} onChange={action('full')} />
      <Pagination page={100} initialPage={1} onChange={action('firstPage')} />
      <Pagination page={100} initialPage={2} onChange={action('secondPage')} />
      <Pagination page={100} initialPage={99} onChange={action('beforeLastPage')} />
      <Pagination page={100} initialPage={100} onChange={action('lastPage')} />
    </React.Fragment>
  ))
  .add('with color', () =>
    COLOR.map(color => (
      <Pagination color={color} page={100} currentPage={50} onChange={action(color || 'default')} />
    )))
  .add('with range', () =>
    [1, 2, 3, 4, 5].map(value => (
      <Pagination range={value} page={100} currentPage={50} onChange={action(`range-${value}`)} />
    )));
