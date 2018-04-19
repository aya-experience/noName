import React from 'react';
import { shallow } from 'enzyme';
import { Tag } from './';

describe('Tag', () => {
  let wrapper;
  let content;
  let onClose;

  beforeEach(() => {
    content = <p>Hello World</p>;
    onClose = jest.fn();
    wrapper = shallow(<Tag onClose={onClose}>{content}</Tag>);
  });

  it('should render children component', () => {
    expect(wrapper.contains(content)).toBeTruthy();
  });

  it('should render a div with tag class by default', () => {
    expect(wrapper.find('span.tag')).toHaveLength(1);
  });

  it('should render a div with tag + className', () => {
    wrapper.setProps({ className: 'hello' });
    expect(wrapper.find('span.hello.tag')).toHaveLength(1);
  });
});
