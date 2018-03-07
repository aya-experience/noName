import React from 'react';
import { shallow } from 'enzyme';
import Subtitle from './';
import Typography from '../Typography';

describe('Subtitle', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Subtitle>Hello World</Subtitle>);
  });

  it('should render a Typography with children prop', () => {
    expect(wrapper.find(Typography).prop('children')).toBe('Hello World');
  });

  it('should render a Typography with className set to "subtitle"', () => {
    expect(wrapper.find(Typography).prop('className')).toBe('subtitle');
  });

  it('should render a Typography with tag set to "h2" by default', () => {
    expect(wrapper.find(Typography).prop('tag')).toBe('h2');
  });

  it('should render a Typography with size set to 2 by default', () => {
    expect(wrapper.find(Typography).prop('size')).toBe(2);
  });

  it('should render a Typography with tag set to "h6" if level 5', () => {
    wrapper.setProps({ level: 5 });
    expect(wrapper.find(Typography).prop('tag')).toBe('h6');
  });

  it('should render a Typography with tag size set to 6 if level 5', () => {
    wrapper.setProps({ level: 5 });
    expect(wrapper.find(Typography).prop('size')).toBe(6);
  });
});
