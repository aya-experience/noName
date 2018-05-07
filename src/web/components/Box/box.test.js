import React from 'react';
import { shallow } from 'enzyme';
import Box from './';

describe('Box', () => {
  let content;
  let wrapper;

  beforeEach(() => {
    content = <div id="hello">Hello world</div>;
    wrapper = shallow(<Box>{content}</Box>);
  });

  it('should render a children component with a text', () => {
    const children = wrapper.find('div#hello');
    expect(children.text()).toEqual('Hello world');
  });

  it('should render a button with the classes in className', () => {
    wrapper.setProps({ className: 'hello' });
    expect(wrapper.find('div.hello')).toHaveLength(1);
  });
});
