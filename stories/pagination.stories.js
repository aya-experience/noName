import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Pagination from '../src/web/components/Pagination';

storiesOf('Pagination', module).add('basic Pagination', () => (
  <React.Fragment>
    <div>
      <Pagination page={100} currentPage={50} onChange={action('basic')} />
    </div>
    <div>
      <Pagination page={100} currentPage={1} onChange={action('basic')} />
    </div>
    <div>
      <Pagination page={100} currentPage={100} onChange={action('basic')} />
    </div>
  </React.Fragment>
));
