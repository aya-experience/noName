import React from 'react';
import { shallow } from 'enzyme';
import Container from './';

describe('Box', () => {
  let content;
  let wrapper;

  beforeEach(() => {
    content = <div id="hello">Hello world</div>;
    wrapper = shallow(<Container>{content}</Container>);
  });

  it('should render children component', () => {
    expect(wrapper.children()).toHaveLength(1);
  });

  it('should render children component with a text', () => {
    const children = wrapper.find('div#hello');
    expect(children.text()).toEqual('Hello world');
  });
});
