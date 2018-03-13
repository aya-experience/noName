import React from 'react';
import { shallow } from 'enzyme';
import typography from './';

describe('Typography', () => {
  let wrapper;
  let DivComponent;

  beforeEach(() => {
    DivComponent = props => <div {...props}>Hello World</div>;
    const DivImproved = typography(DivComponent);
    wrapper = shallow(<DivImproved>Hello World</DivImproved>);
  });

  it('should render a Text with children props', () => {
    expect(wrapper.find(DivComponent).prop('children')).toBe('Hello World');
  });

  it('should render a Text without className by default', () => {
    expect(wrapper.find(DivComponent).prop('className')).toBe('');
  });

  it('should render a Text with className = "has-text-weight-light"', () => {
    wrapper.setProps({ weight: 'light' });
    expect(wrapper.find(DivComponent).prop('className')).toContain('has-text-weight-light');
  });

  it('should render a Text with className = "has-text-white"', () => {
    wrapper.setProps({ color: 'white' });
    expect(wrapper.find(DivComponent).prop('className')).toContain('has-text-white');
  });

  it('should render a p with a Alignment class', () => {
    wrapper.setProps({ align: 'centered' });
    expect(wrapper.find(DivComponent).prop('className')).toContain('has-text-centered');
  });

  it('should render a p with a transformation class', () => {
    wrapper.setProps({ transformation: 'capitalized' });
    expect(wrapper.find(DivComponent).prop('className')).toContain('is-capitalized');
  });
});
