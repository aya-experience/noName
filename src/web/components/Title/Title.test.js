import React from 'react';
import { shallow } from 'enzyme';
import { Title } from './';

describe('Title', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Title>Hello World</Title>);
  });

  it('should render a h1 with children as a text', () => {
    expect(wrapper.find('h1.title').text()).toBe('Hello World');
  });

  it('should render a h1 with is-1 by default', () => {
    expect(wrapper.find('h1.title.is-1')).toHaveLength(1);
  });

  it('should render a h1 with is-1 if size = 1', () => {
    wrapper.setProps({ size: 1 });
    expect(wrapper.find('h1.title.is-1')).toHaveLength(1);
  });

  it('should render a h1 with is-6 if size = 6', () => {
    wrapper.setProps({ size: 6 });
    expect(wrapper.find('h1.title.is-6')).toHaveLength(1);
  });

  it('should render a h1 with className as class', () => {
    wrapper.setProps({ className: 'hello' });
    expect(wrapper.find('h1.title.hello')).toHaveLength(1);
  });
});
