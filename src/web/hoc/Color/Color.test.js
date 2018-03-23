import React from 'react';
import { shallow } from 'enzyme';
import colorify from './';

describe('Color', () => {
  let wrapper;
  let DivComponent;

  beforeEach(() => {
    DivComponent = props => <div {...props}>Hello World</div>;
    const ColorDiv = colorify(DivComponent);
    wrapper = shallow(<ColorDiv />);
  });

  it('should render the connected component without class by default', () => {
    expect(wrapper.find(DivComponent).prop('className')).toBe('');
  });

  it('should render the connected component with is-danger classes', () => {
    wrapper.setProps({ color: 'danger' });
    expect(wrapper.find(DivComponent).prop('className')).toBe('is-danger');
  });

  it('should transfert className props to the connected component', () => {
    wrapper.setProps({ className: 'hello' });
    expect(wrapper.find(DivComponent).prop('className')).toBe('hello');
  });
});
