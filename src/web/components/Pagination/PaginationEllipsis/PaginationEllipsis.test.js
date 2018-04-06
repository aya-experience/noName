import React from 'react';
import { shallow } from 'enzyme';
import PaginationEllipsis from './';

describe('PaginationEllipsis', () => {
  it('should show span with pagination-ellipsis class', () => {
    const wrapper = shallow(<PaginationEllipsis />);
    expect(wrapper.find('span.pagination-ellipsis')).toHaveLength(1);
  });
});
