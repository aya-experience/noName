import React from 'react';
import { shallow } from 'enzyme';
import Button from './';

describe('Button', () => {
  let wrapper;
  let onClick;

  beforeEach(() => {
    onClick = jest.fn();
    // use mount to simulate onClick with disabled button
    wrapper = shallow(<Button onClick={onClick}>Hello world</Button>);
  });

  it('should render children component', () => {
    expect(wrapper.text()).toEqual('Hello world');
  });

  it('should trigger on Click an event', () => {
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should have a disabled button when the prop disabled is true', () => {
    wrapper.setProps({ disabled: true });
    const button = wrapper.find('button');
    expect(button.prop('disabled')).toEqual(true);
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

  it('should have a button with a color class when the props color is set', () => {
    wrapper.setProps({ color: 'primary' });
    const buttonElement = wrapper.find('button.is-primary');
    expect(buttonElement).toHaveLength(1);
  });

  it('should have a button with a size class when the props size is set', () => {
    wrapper.setProps({ size: 'small' });
    const buttonElement = wrapper.find('button.is-small');
    expect(buttonElement).toHaveLength(1);
  });
});
