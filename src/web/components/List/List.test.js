import React from 'react';
import { shallow } from 'enzyme';
import List from './';
import Item from '../Item';

describe('List', () => {
  let wrapper;

  beforeEach(() => {
    const content = (
      <List>
        <Item>Item1</Item>
        <Item>Item2</Item>
      </List>
    );
    wrapper = shallow(content);
  });

  it('should render children component', () => {
    expect(wrapper.children()).toHaveLength(2);
  });
});
