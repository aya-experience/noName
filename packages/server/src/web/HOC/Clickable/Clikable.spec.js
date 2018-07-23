/* eslint-disable react/prop-types */
import React from 'react';
import { shallow } from 'enzyme';
import clickable from './index';

describe('Clickable', () => {
  let wrapper;
  let onClick;
  let value;
  let Component;

  beforeEach(() => {
    Component = ({ children, ...rest }) => <span {...rest}>{children}</span>;
    onClick = jest.fn();
    const ClickableComponent = clickable(Component, onClick);
    value = { prop1: 'hello', prop2: 'world', children: 'Bob' };

    wrapper = shallow(<ClickableComponent value={value} />);
  });


  it('should trigger onClick when click is done on the div', () => {
    wrapper.find('div').prop('onClick')();
    expect(onClick).toBeCalledWith(value);
  });


  it('should render a span with children', () => {
    const span = wrapper.find(Component).dive();
    expect(span.text()).toBe(value.children);
  });

  it('should trigger onClick when onClickHandler is call', () => {
    const instance = wrapper.instance();
    instance.onClickHandler(value)
    expect(onClick).toBeCalledWith(value);
  });
});
