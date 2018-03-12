import React from 'react';
import { shallow } from 'enzyme';
import Progress from './';

describe('Progress', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Progress value="50" />);
  });

  it('should render a progress bar with 0% completed', () => {
    wrapper.setProps({ value: '0' });
    expect(wrapper.find('progress').prop('value')).toBe('0');
  });

  it('should render a progress bar with 50% completed', () => {
    expect(wrapper.find('progress').prop('value')).toBe('50');
  });

  it('should render a progress bar with 100% completed', () => {
    wrapper.setProps({ value: '100' });
    expect(wrapper.find('progress').prop('value')).toBe('100');
  });

  it('should render only progress class if className is not set', () => {
    expect(wrapper.find('progress').prop('className')).toBe('progress');
  });

  it('should render progress class + className', () => {
    wrapper.setProps({ className: 'hello' });
    expect(wrapper.find('progress').prop('className')).toBe('progress hello');
  });
});
