import React from 'react';
import { shallow } from 'enzyme';
import Paragraph from './';

describe('Paragraph', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Paragraph>Hello World</Paragraph>);
  });

  it('should render a p with children as a text', () => {
    expect(wrapper.find('p').text()).toBe('Hello World');
  });
});
