import React from 'react';
import { shallow } from 'enzyme';
import Column from './';

describe('Column', () => {
  let content;
  let wrapper;

  beforeEach(() => {
    content = <div id="hello">Hello world</div>;
    wrapper = shallow(<Column>{content}</Column>);
  });

  it('should render children component', () => {
    expect(wrapper.children()).toHaveLength(1);
  });

  it('should not have is-* by default', () => {
    expect(wrapper.find('div.column').prop('className')).toBe('column');
  });

  it('should have a is-* class if size is a number', () => {
    wrapper.setProps({ size: 1 });
    expect(wrapper.find('div.column.is-1')).toHaveLength(1);
  });
});
