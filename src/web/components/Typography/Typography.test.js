import React from 'react';
import { mount } from 'enzyme';
import connect from './TypographyContainer';
import Text from '../Text';

describe('Typography', () => {
  let wrapper;

  beforeEach(() => {
    const TextImproved = connect(Text);
    wrapper = mount(<TextImproved>Hello World</TextImproved>);
  });

  it('should render a Text with children props', () => {
    expect(wrapper.find(Text).prop('children')).toBe('Hello World');
  });

  it('should render a Text with className = "has-text-weight-light"', () => {
    wrapper.setProps({ weight: 'light' });
    expect(wrapper.find(Text).prop('className')).toContain('has-text-weight-light');
  });

  it('should render a Text with className = "has-text-white"', () => {
    wrapper.setProps({ color: 'white' });
    expect(wrapper.find(Text).prop('className')).toContain('has-text-white');
  });

  it('should render a p with a Alignment class', () => {
    wrapper.setProps({ align: 'centered' });
    // console.log(wrapper.debug());
    expect(wrapper.find(Text).prop('className')).toContain('has-text-centered');
  });

  it('should render a p with a transformation class', () => {
    wrapper.setProps({ transformation: 'capitalized' });
    expect(wrapper.find(Text).prop('className')).toContain('is-capitalized');
  });
});
