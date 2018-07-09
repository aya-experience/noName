import React from 'react';
import { shallow } from 'enzyme';
import Touchable from './index';

describe('Touchable', () => {
  let wrapper;
  let onClick;

  beforeEach(() => {
    onClick = jest.fn();
    const content = <Touchable onClick={onClick}>Content</Touchable>;
    wrapper = shallow(content);
  });

  it('should render children as a text', () => {
    expect(wrapper.find('span').text()).toBe('Content');
  });

  it('should trigger onClick event whith value as param when the a is clicked and value set ', () => {
    wrapper.setProps({ value: 1 });
    wrapper.find('span').simulate('click');
    expect(onClick).toBeCalledWith(1);
  });

  it('should trigger onClick event when the a is clicked', () => {
    wrapper.find('span').simulate('click');
    expect(onClick).toBeCalled();
  });
});
