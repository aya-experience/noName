import React from 'react';
import { shallow } from 'enzyme';
import Content from './';

describe('Content', () => {
  let content;
  let wrapper;

  beforeEach(() => {
    content = <h1>Hello world</h1>;
    wrapper = shallow(<Content>{content}</Content>);
  });

  it('should render a children component', () => {
    expect(wrapper.children()).toHaveLength(1);
  });

  it('should render a content without size by default', () => {
    expect(wrapper.find('div.content').prop('className')).toBe('content');
  });

  it('should render a div with is-* class if size is set', () => {
    wrapper.setProps({ size: 'small' });
    expect(wrapper.find('div.content').prop('className')).toBe('content is-small');
  });
});
