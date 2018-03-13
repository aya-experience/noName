import React from 'react';
import { shallow } from 'enzyme';
import sizable from './';

describe('Size', () => {
  let wrapper;
  let DivComponent;

  beforeEach(() => {
    DivComponent = props => <div {...props}>Hello World</div>;
    const SizeDiv = sizable(DivComponent);
    wrapper = shallow(<SizeDiv />);
  });

  it('should render the connected component without class by default', () => {
    expect(wrapper.find(DivComponent).prop('className')).toBe('');
  });

  it('should render the connected component with is-large classes', () => {
    wrapper.setProps({ size: 'large' });
    expect(wrapper.find(DivComponent).prop('className')).toBe('is-large');
  });

  it('should transfert className props to the connected component', () => {
    wrapper.setProps({ className: 'hello' });
    expect(wrapper.find(DivComponent).prop('className')).toBe('hello');
  });
});
