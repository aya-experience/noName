import React from 'react';
import { shallow } from 'enzyme';
import Pagination from './';
import Button from '../Button';

describe('Pagination', () => {
  let wrapper;
  let onChange;

  beforeEach(() => {
    onChange = jest.fn();
    wrapper = shallow(<Pagination onChange={onChange} currentPage={50} page={100} />);
  });

  it('should render a disabled previous button when the first page is selected', () => {
    wrapper.setProps({ currentPage: 1 });
    expect(wrapper.find('.pagination-previous').prop('disabled')).toBeTruthy();
  });

  it('should not render a disabled next button when the last page is selected', () => {
    wrapper.setProps({ currentPage: 100 });
    expect(wrapper.find('.pagination-next').prop('disabled')).toBeTruthy();
  });

  it('should trigger onChange event with a page number when a user click on previous button', () => {
    const button = wrapper.find(Button).at(0);
    button.simulate('click');
    expect(onChange).toBeCalledWith(49);
  });

  it('should trigger onChange event with a page number when a user click on next button', () => {
    const button = wrapper.find(Button).at(1);
    button.simulate('click');
    expect(onChange).toBeCalledWith(51);
  });
});
