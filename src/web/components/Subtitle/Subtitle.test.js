import React from 'react';
import { shallow } from 'enzyme';
import { Subtitle } from '.';

describe('Subtitle', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Subtitle>Hello World</Subtitle>);
  });

  it('should render a h2 with children as a text', () => {
    expect(wrapper.find('h2.subtitle').text()).toBe('Hello World');
  });

  it('should render a h2 with is-2 by default', () => {
    expect(wrapper.find('h2.subtitle.is-2')).toHaveLength(1);
  });

  it('should render a h6 with is-5 if level = 5', () => {
    wrapper.setProps({ level: 5 });
    expect(wrapper.find('h6.subtitle.is-6')).toHaveLength(1);
  });
});
