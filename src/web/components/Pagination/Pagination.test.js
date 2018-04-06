import React from 'react';
import { shallow } from 'enzyme';
import Pagination from './';
import Button from '../Button';
import PaginationNumberList from './PaginationNumberList';

describe('Pagination', () => {
  let wrapper;
  let onChange;

  beforeEach(() => {
    onChange = jest.fn();
    wrapper = shallow(<Pagination onChange={onChange} initialPage={50} page={100} />);
  });

  it('should pass correctly the prop page, onSelected, currentPage, range and color to PaginationNumberList', () => {
    expect(wrapper.find(PaginationNumberList).props()).toEqual({
      onSelected: wrapper.instance().setPage,
      currentPage: 50,
      page: 100,
      range: 2,
      color: 'dark',
    });
  });

  it('should render a disabled previous button when the first page is selected', () => {
    wrapper.setState({ currentPage: 1 });
    expect(wrapper.find('.pagination-previous').prop('disabled')).toBeTruthy();
  });

  it('should not render a disabled next button when the last page is selected', () => {
    wrapper.setState({ currentPage: 100 });
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

  it('should trigger onChange event when onSelected event is trigger on PaginationNumberList', () => {
    const onSelected = wrapper.find(PaginationNumberList).prop('onSelected');
    onSelected(1);
    expect(onChange).toBeCalledWith(1);
  });

  it('should not change page when the current page is last and nextPageHandler is called ', () => {
    wrapper.setState({ currentPage: 100 });
    wrapper.instance().nextPageHandler();
    expect(onChange).not.toBeCalled();
  });

  it('should not change page when the current page is last and nextPageHandler is called ', () => {
    wrapper.setState({ currentPage: 0 });
    wrapper.instance().previousPageHandler();
    expect(onChange).not.toBeCalled();
  });
});
