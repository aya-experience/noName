import React from 'react';
import { shallow } from 'enzyme';
import Columns from './';
import Column from '../Column';

describe('Columns', () => {
  let wrapper;

  beforeEach(() => {
    const content = (
      <Columns>
        <Column>
          <p>Hello</p>
        </Column>
        <Column>
          <p>world</p>
        </Column>
      </Columns>
    );
    wrapper = shallow(content);
  });

  it('should render children component', () => {
    expect(wrapper.children()).toHaveLength(2);
  });
});
