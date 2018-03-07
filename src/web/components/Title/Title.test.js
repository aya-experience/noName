import React from 'react';
import { mount } from 'enzyme';
import Title from './';
import Typography from '../Typography';

describe('Title', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Title>Hello World</Title>);
  });

  it('should render a Typography with children prop', () => {
    expect(wrapper.find(Typography).prop('children')).toBe('Hello World');
  });

  it('should render a Typography with tag prop', () => {
    expect(wrapper.find(Typography).prop('tag')).toBe('h1');
  });

  it('should render a Typography with className prop', () => {
    expect(wrapper.find(Typography).prop('className')).toBe('title');
  });

  it('should render a Typography with size prop to 1 by default', () => {
    expect(wrapper.find(Typography).prop('size')).toBe(1);
  });

  it('should render a h1 with is-6 if size = 6', () => {
    wrapper.setProps({ size: 6 });
    expect(wrapper.find(Typography).prop('size')).toBe(6);
  });

  it('should transfert its prop to typography', () => {
    // TODO prop inheritance
    expect(wrapper.find(Typography).props());
  });
});
