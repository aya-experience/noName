import React from 'react';
import { shallow } from 'enzyme';
import Pagination from './';

describe('Pagination', () => {
  let wrapper;
  let onChange;

  beforeEach(() => {
    onChange = jest.fn();
    wrapper = shallow(<Pagination onChange={onChange} currenrPage={5} page={100} />);
  });

  it('should render the first page', () => {
    const page = wrapper.find('ul.pagination-list').first();
    expect(page.text()).expect('1');
  });

  it('should render the last page', () => {
    const page = wrapper.find('ul.pagination-list').last();
    expect(page.text()).expect('100');
  });

  it('should render the current page  number with is-current class', () => {
    const page = wrapper.find('li.is-current');
    expect(page.text()).expect('100');
  });

  it('should render the previous page number', () => {
    const page = '';
    expect(page.text()).expect('100');
  });

  it('should render the next page  number', () => {});

  // Later
  // it('should trigger onChange event with a page number when a user click on a page number', () => {});
  // it('should trigger onChange event with current page - 1 when a user click on next button', () => {});
  // it('should trigger onChange event with a page number + 1 when a user click on previous button', () => {});
});
