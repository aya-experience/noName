import React from 'react';
import { shallow } from 'enzyme';
import Text from './';

describe('Text', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Text>Hello World</Text>);
  });

  it('should render a p with children as a text', () => {
    expect(wrapper.find('p').text()).toBe('Hello World');
  });
});
