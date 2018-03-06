import React from 'react';
import { shallow } from 'enzyme';
import Subtitle from './';

describe('Subtitle', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Subtitle>Hello World</Subtitle>);
  });

  it('should render a h2 with children as a text', () => {
    expect(wrapper.find('h5.subtitle').text()).toBe('Hello World');
  });

  it('should render a h2 with is-1 by default', () => {
    expect(wrapper.find('h5.subtitle.is-1')).toHaveLength(1);
  });

  it('should render a h6 with is-6 if level = 6', () => {
    wrapper.setProps({ size: 6 });
    expect(wrapper.find('h6.subtitle.is-6')).toHaveLength(1);
  });
});
