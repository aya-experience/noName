import React from 'react';
import { shallow } from 'enzyme';
import { ButtonBase } from './';

describe('ButtonBase', () => {
  let wrapper;
  let onClick;

  beforeEach(() => {
    onClick = jest.fn();
    wrapper = shallow(<ButtonBase onClick={onClick}>Hello world</ButtonBase>);
  });

  it('should render a children component', () => {
    expect(wrapper.text()).toEqual('Hello world');
  });

  it('should trigger onClick event', () => {
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should have a disabled button when the prop disabled is true', () => {
    wrapper.setProps({ disabled: true });
    const button = wrapper.find('button');
    expect(button.prop('disabled')).toBe(true);
  });

  it('should have a is-outlined class when the prop outlined is true', () => {
    wrapper.setProps({ outlined: true });
    const button = wrapper.find('button.is-outlined');
    expect(button).toHaveLength(1);
  });

  it('should have a is-inverted class when the prop inverted is true', () => {
    wrapper.setProps({ inverted: true });
    const button = wrapper.find('button.is-inverted');
    expect(button).toHaveLength(1);
  });

  it('should have a is-rounded class when the prop rounded is true', () => {
    wrapper.setProps({ rounded: true });
    const button = wrapper.find('button.is-rounded');
    expect(button).toHaveLength(1);
  });

  it('should have a is-loading class when the prop loading is true', () => {
    wrapper.setProps({ loading: true });
    const button = wrapper.find('button.is-loading');
    expect(button).toHaveLength(1);
  });

  it('should render a button with the classes in className', () => {
    wrapper.setProps({ className: 'hello' });
    expect(wrapper.find('button.hello')).toHaveLength(1);
  });
});
