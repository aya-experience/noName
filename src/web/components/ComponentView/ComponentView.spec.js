import React from 'react';
import { shallow } from 'enzyme';
import { Minus, Plus } from 'mdi-material-ui';
import ComponentView from './index';
import Touchable from '../Touchable/index';
import XmlHighlight from '../XmlHighlight/index';

describe('ComponentView', () => {
  let value;
  let wrapper;
  let children;

  beforeEach(() => {
    value = { className: 'Hello', id: 1, props: {} };
    children = <p id="test">Hello moto</p>;
    wrapper = shallow(<ComponentView value={value}>{children}</ComponentView>);
  });

  it('should render children', () => {
    wrapper.setState({ open: true });
    expect(wrapper.find('p#test').first().text()).toBe('Hello moto');
  });

  it('should render children', () => {
    children = [
      <p className="test">Hello</p>,
      <p className="test">Hello</p>,
      <p className="test">Hello</p>,
    ];
    wrapper = shallow(<ComponentView value={value}>{children}</ComponentView>);
    wrapper.setState({ open: true });
    expect(wrapper.find('p.test')).toHaveLength(3);
  });


  it('should not render children', () => {
    expect(wrapper.find('p#test')).toHaveLength(0);
  });

  it('should not render icon when no children', () => {
    wrapper.setProps({ children: null });
    const icon = wrapper.find(Plus);
    expect(icon).toHaveLength(0);
  });

  it('should render icon when children is not null', () => {
    const icon = wrapper.find(Plus);
    expect(icon).toHaveLength(1);
  });

  it('should render a minus icon when children is not null and state open is true', () => {
    wrapper.setState({ open: true });
    const icon = wrapper.find(Minus);
    expect(icon).toHaveLength(1);
  });

  it('should update open to true when open is call', () => {
    const instance = wrapper.instance();
    instance.setState = jest.fn();
    instance.open();
    expect(instance.setState).toBeCalledWith({ open: true });
  });

  it('should update open to false when close is call', () => {
    const instance = wrapper.instance();
    instance.setState = jest.fn();
    instance.close();
    expect(instance.setState).toBeCalledWith({ open: false });
  });

  it('should return a touchable when ifFunction is call with a func', () => {
    const content = <p>Hello world</p>;
    const instance = wrapper.instance();
    const result = instance.ifFunction(() => {}, content);
    expect(result.type).toEqual(Touchable);
  });

  it('should not return a touchable when ifFunction is call with a func', () => {
    const content = <p>Hello world</p>;
    const instance = wrapper.instance();
    const result = instance.ifFunction(null, content);
    expect(result.type).toEqual('p');
  });

  it('should not give a class selected to XmlHighlight if selected is false', () => {
    const highlighter = wrapper.find(XmlHighlight);
    expect(highlighter.hasClass('selected')).toBeFalsy();
  });


  it('should give a class selected to XmlHighlight if selected is true', () => {
    wrapper.setProps({ selected: true });
    const highlighter = wrapper.find(XmlHighlight);
    expect(highlighter.hasClass('selected')).toBeTruthy();
  });
});
