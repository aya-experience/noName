import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Pagination from '../src/web/components/Pagination';
import COLOR from '../src/web/constant';

storiesOf('Pagination', module)
  .add('basic Pagination', () => (
    <React.Fragment>
      <Pagination page={100} currentPage={50} onChange={action('full')} />
      <Pagination page={100} currentPage={1} onChange={action('firstPage')} />
      <Pagination page={100} currentPage={2} onChange={action('secondPage')} />
      <Pagination page={100} currentPage={99} onChange={action('beforeLastPage')} />
      <Pagination page={100} currentPage={100} onChange={action('lastPage')} />
    </React.Fragment>
  ))
  .add('with color', () =>
    COLOR.map(color => (
      <Pagination
        color={color}
        page={100}
        currentPage={50}
        onChange={action(color || 'default')}
      />
    )));
