import React from 'react';
import { shallow } from 'enzyme';
import Ignore from './index';

describe('Ignore', () => {
  it('should render children component', () => {
    const children = <div><p>Hello</p></div>;
    const wrapper = shallow(<Ignore>{children}</Ignore>);
    expect(wrapper.find('p').text()).toBe('Hello');
  });
});
