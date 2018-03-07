import React from 'react';
import { shallow } from 'enzyme';
import Typography from './';

describe('Typography', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Typography>Hello World</Typography>);
  });

  it('should render a p with children as text', () => {
    expect(wrapper.find('p').text()).toBe('Hello World');
  });

  it('should render a p with is-6 and normal weight without color, alignment, transformation or className by default', () => {
    expect(wrapper.find('p.is-6.has-text-weight-normal').prop('className')).toBe('is-6 has-text-weight-normal');
  });

  it('should render a h1', () => {
    wrapper.setProps({ tag: 'h1' });
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('should render a h6', () => {
    wrapper.setProps({ tag: 'h6' });
    expect(wrapper.find('h6')).toHaveLength(1);
  });

  it('should render a tag with is-7', () => {
    wrapper.setProps({ size: 7 });
    expect(wrapper.find('.is-7')).toHaveLength(1);
  });

  it('should render a tag with a color class', () => {
    wrapper.setProps({ color: 'white' });
    expect(wrapper.find('.has-text-white')).toHaveLength(1);
  });

  it('should render a tag with a Alignment class', () => {
    wrapper.setProps({ align: 'centered' });
    expect(wrapper.find('.has-text-centered')).toHaveLength(1);
  });

  it('should render a tag with a transformation class', () => {
    wrapper.setProps({ transformation: 'capitalized' });
    expect(wrapper.find('.is-capitalized')).toHaveLength(1);
  });

  it('should render a tag with a weight class', () => {
    wrapper.setProps({ weight: 'light' });
    expect(wrapper.find('.has-text-weight-light')).toHaveLength(1);
  });

  it('should render a tag with a className ', () => {
    wrapper.setProps({ className: 'title' });
    expect(wrapper.find('.title')).toHaveLength(1);
  });
});
