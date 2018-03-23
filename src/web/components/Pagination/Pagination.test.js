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

  it('should render the first page number', () => {
    const button = wrapper.find(Button).at(2);
    expect(button.prop('children')).toBe('1');
  });

  it('should render the last page number', () => {
    const button = wrapper.find(Button).last();
    expect(button.prop('children')).toBe('100');
  });

  it('should render the current page number', () => {
    const button = wrapper.find(Button).at(4);
    expect(button.prop('children')).toBe('50');
  });

  it('should render the current page  number with is-current class', () => {
    const button = wrapper.find(Button).at(4);
    expect(button.hasClass('is-current')).toBeTruthy();
  });

  it('should render the current page  number with the disabled prop', () => {
    const button = wrapper.find(Button).at(4);
    expect(button.prop('disabled')).toBeTruthy();
  });

  it('should render the previous page number', () => {
    const button = wrapper.find(Button).at(3);
    expect(button.prop('children')).toBe('49');
  });

  it('should render the next page number', () => {
    const button = wrapper.find(Button).at(5);
    expect(button.prop('children')).toBe('51');
  });

  it('should hide some page number when the first page is selected', () => {
    wrapper.setProps({ currentPage: 1 });
    const buttons = wrapper.find(Button);
    expect(buttons).toHaveLength(5);
  });

  it('should hide some page number when the last page is selected', () => {
    wrapper.setProps({ currentPage: 100 });
    const buttons = wrapper.find(Button);
    expect(buttons).toHaveLength(5);
  });

  it('should hide some page number when the page after the first page number is selected', () => {
    wrapper.setProps({ currentPage: 2 });
    const buttons = wrapper.find(Button);
    expect(buttons).toHaveLength(6);
  });

  it('should hide some page number when the page before the last page number is selected', () => {
    wrapper.setProps({ currentPage: 99 });
    const buttons = wrapper.find(Button);
    expect(buttons).toHaveLength(6);
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

  it('should trigger onChange event with a page number when a user click on the first page button', () => {
    const button = wrapper.find(Button).at(2);
    button.simulate('click');
    expect(onChange).toBeCalledWith(1);
  });

  it('should trigger onChange event with a page number when a user click on the last page button', () => {
    const button = wrapper.find(Button).last();
    button.simulate('click');
    expect(onChange).toBeCalledWith(100);
  });

  it('should trigger onChange event with a page number when a user click on the number before the current number', () => {
    const button = wrapper.find(Button).at(3);
    button.simulate('click');
    expect(onChange).toBeCalledWith(49);
  });

  it('should trigger onChange event with a page number when a user click on the number after current number', () => {
    const button = wrapper.find(Button).at(5);
    button.simulate('click');
    expect(onChange).toBeCalledWith(51);
  });

  it('should not trigger onChange event when the user click on the current page', () => {
    const button = wrapper.find(Button).at(4);
    button.simulate('click');
    expect(onChange).not.toBeCalled();
  });
});
