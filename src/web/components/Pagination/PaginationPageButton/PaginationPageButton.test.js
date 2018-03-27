import React from 'react';
import { shallow } from 'enzyme';
import PaginationPageButton from './';
import Button from '../../Button';
import { wrap } from 'module';

describe('PaginationPageButton', () => {
  let wrapper;
  let onClick;
  let value;

  beforeEach(() => {
    onClick = jest.fn();
    value = 1;
    wrapper = shallow(<PaginationPageButton value={value} onClick={onClick} color="" />);
  });

  it('should render un button with value as children prop', () => {
    expect(wrapper.find(Button).prop('children')).toBe(value.toString());
  });

  it('should render un button with value as children prop', () => {
    const button = wrapper.find(Button);
    button.simulate('click');
    expect(onClick).toBeCalledWith(value);
  });

  it('should render un button with no color', () => {
    expect(wrapper.find(Button).prop('color')).toBe('');
  });

  it('should render un button with primary color', () => {
    wrapper.setProps({ color: 'primary' });
    expect(wrapper.find(Button).prop('color')).toBe('primary');
  });

  it('should trigger onClick event with value as param when the button is cliked', () => {
    wrapper.find(Button).simulate('click');
    expect(onClick).toBeCalledWith(value);
  });
});
