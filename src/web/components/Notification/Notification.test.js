import React from 'react';
import { shallow } from 'enzyme';
import { Notification } from './';

describe('Notification', () => {
  let wrapper;
  let content;
  let onClose;

  beforeEach(() => {
    content = <p>Hello World</p>;
    onClose = jest.fn();
    wrapper = shallow(<Notification onClose={onClose}>{content}</Notification>);
  });

  it('should render children component', () => {
    expect(wrapper.contains(content)).toBeTruthy();
  });

  it('should render a close button when onClose func is set ', () => {
    expect(wrapper.find('button.delete')).toHaveLength(1);
  });

  it('should render a div with notification + className', () => {
    expect(wrapper.find('div.notification')).toHaveLength(1);
  });

  it('should render a div with notification + className', () => {
    wrapper.setProps({ className: 'hello' });
    expect(wrapper.find('div.hello.notification')).toHaveLength(1);
  });

  it('should not render a close button when onClose func is not set', () => {
    wrapper.setProps({ onClose: null });
    expect(wrapper.find('button.delete')).toHaveLength(0);
  });

  it('should trigger onClose function when the close button is clicked', () => {
    const button = wrapper.find('button.delete');
    button.simulate('click');
    expect(onClose).toBeCalled();
  });
});
