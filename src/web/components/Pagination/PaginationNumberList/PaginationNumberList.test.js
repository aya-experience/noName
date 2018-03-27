import React from 'react';
import { shallow } from 'enzyme';
import PaginationNumberList from './';
import PaginationPageButton from '../PaginationPageButton';
import PaginationEllipsis from '../PaginationEllipsis';

describe('PaginationNumberList', () => {
  let wrapper;
  let onSelected;

  beforeEach(() => {
    onSelected = jest.fn();
    wrapper = shallow(<PaginationNumberList
      page={100}
      currentPage={50}
      onSelected={onSelected}
      range={2}
      color=""
    />);
  });

  // currentPage 1
  it('should render 4 button when currentPage = 0', () => {
    wrapper.setProps({ currentPage: 1 });
    expect(wrapper.find(PaginationPageButton)).toHaveLength(4);
  });

  it('should render in first the button current page when currentPage = 0', () => {
    wrapper.setProps({ currentPage: 1 });
    expect(wrapper
      .find(PaginationPageButton)
      .first()
      .hasClass('is-current')).toBeTruthy();
  });

  it('should render one Pagination Ellipsis when currentPage = 0', () => {
    wrapper.setProps({ currentPage: 1 });
    expect(wrapper.find(PaginationEllipsis)).toHaveLength(1);
  });

  it('should render a current page button with value = 1', () => {
    wrapper.setProps({ currentPage: 1 });
    expect(wrapper.find('.is-current').prop('value')).toBe(1);
  });

  // currentPage 2
  it('should render 5 button  when currentPage = 1', () => {
    wrapper.setProps({ currentPage: 2 });
    expect(wrapper.find(PaginationPageButton)).toHaveLength(5);
  });

  it('should render one Pagination Ellipsis when currentPage = 1', () => {
    wrapper.setProps({ currentPage: 2 });
    expect(wrapper.find(PaginationEllipsis)).toHaveLength(1);
  });

  it('should render in first the button first page button', () => {
    wrapper.setProps({ currentPage: 2 });
    expect(wrapper
      .find(PaginationPageButton)
      .first()
      .prop('value')).toBe(1);
  });

  it('should render a current page button with value = 2', () => {
    wrapper.setProps({ currentPage: 2 });
    expect(wrapper.find('.is-current').prop('value')).toBe(2);
  });
  // Other case

  // currentPage = Page - 1
  it('should render 5 button when currentPage = 99', () => {
    wrapper.setProps({ currentPage: 99 });
    expect(wrapper.find(PaginationPageButton)).toHaveLength(5);
  });

  it('should render one Pagination Ellipsis when currentPage = 99', () => {
    wrapper.setProps({ currentPage: 99 });
    expect(wrapper.find(PaginationEllipsis)).toHaveLength(1);
  });

  it('should render a current page button with value = 99', () => {
    wrapper.setProps({ currentPage: 99 });
    expect(wrapper.find('.is-current').prop('value')).toBe(99);
  });

  // CurrentPage = Page
  it('should render 5 button  when currentPage = 100', () => {
    wrapper.setProps({ currentPage: 100 });
    expect(wrapper.find(PaginationPageButton)).toHaveLength(4);
  });

  it('should render one Pagination Ellipsis when currentPage = 1', () => {
    wrapper.setProps({ currentPage: 100 });
    expect(wrapper.find(PaginationEllipsis)).toHaveLength(1);
  });

  it('should render in last the button last page button', () => {
    wrapper.setProps({ currentPage: 100 });
    expect(wrapper
      .find(PaginationPageButton)
      .last()
      .prop('value')).toBe(100);
  });

  it('should render a current page button with value = 2', () => {
    wrapper.setProps({ currentPage: 100 });
    expect(wrapper.find('.is-current').prop('value')).toBe(100);
  });

  it('should render in last the button current page when currentPage = 100', () => {
    wrapper.setProps({ currentPage: 100 });
    expect(wrapper
      .find(PaginationPageButton)
      .last()
      .hasClass('is-current')).toBeTruthy();
  });

  // Click test
  it('should transfer onClick event to onSelected event', () => {
    const button = wrapper.find(PaginationPageButton).first();
    button.prop('onClick')(5);
    expect(onSelected).toBeCalledWith(5);
  });
});
