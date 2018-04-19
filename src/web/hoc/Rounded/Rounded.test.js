import React from 'react';
import { shallow } from 'enzyme';
import roundable from './';

describe('Roundable', () => {
  let wrapper;
  let DivComponent;

  beforeEach(() => {
    DivComponent = props => <div {...props}>Hello World</div>;
    const ColorDiv = roundable(DivComponent);
    wrapper = shallow(<ColorDiv />);
  });

  it('should render the connected component without class by default', () => {
    expect(wrapper.find(DivComponent).prop('className')).toBe('');
  });

  it('should render the connected component with is-danger classes', () => {
    wrapper.setProps({ rounded: true });
    expect(wrapper.find(DivComponent).prop('className')).toBe('is-rounded');
  });

  it('should transfert className props to the connected component', () => {
    wrapper.setProps({ className: 'hello', rounded: true });
    expect(wrapper.find(DivComponent).prop('className')).toBe('hello is-rounded');
  });
});
