import React from 'react';
import { shallow } from 'enzyme';
import Icon from './';

describe('Container', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Icon>fa-ban</Icon>);
  });

  it('should render a i with children text has a class', () => {
    const icon = wrapper.find('i.fa-ban');
    expect(icon).toHaveLength(1);
  });

  it('should have a button with a color class when the props color is set', () => {
    wrapper.setProps({ color: 'primary' });
    const span = wrapper.find('span.has-text-primary');
    expect(span).toHaveLength(1);
  });

  it('should have a button with a size class when the props size is set', () => {
    wrapper.setProps({ size: 'small' });
    const span = wrapper.find('span.is-small');
    expect(span).toHaveLength(1);
  });
});
