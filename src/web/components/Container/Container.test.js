import React from 'react';
import { shallow } from 'enzyme';

import Container from './';

describe('Container', () => {
  let content;
  let wrapper;

  beforeEach(() => {
    content = <div id="test">Hello world</div>;
    wrapper = shallow(<Container>{content}</Container>);
  });

  it('should render children component', () => {
    const children = wrapper.find('div#test');
    expect(children).toHaveLength(1);
  });

  it('should render children component with a text', () => {
    const children = wrapper.find('div#test');
    expect(children.text()).toEqual('Hello world');
  });
});
