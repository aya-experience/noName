import React from 'react';
import { shallow } from 'enzyme';
import Item from './';

describe('Item', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Item>Hello world</Item>);
  });

  it('should render children component', () => {
    expect(wrapper.children()).toHaveLength(1);
  });
});
