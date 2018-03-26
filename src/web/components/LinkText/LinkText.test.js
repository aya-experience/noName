import React from 'react';
import { shallow } from 'enzyme';
import { LinkText } from './';

describe('Text', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LinkText href="/hello-world">Hello World</LinkText>);
  });

  it('should render a a with children as a text', () => {
    expect(wrapper.find('a').text()).toBe('Hello World');
  });

  it('should render a a with a className prop', () => {
    wrapper.setProps({ className: 'hello' });
    expect(wrapper.find('a').hasClass('hello')).toBeTruthy();
  });

  it('should render a a with a href prop', () => {
    expect(wrapper.find('a').prop('href')).toBe('/hello-world');
  });
});
