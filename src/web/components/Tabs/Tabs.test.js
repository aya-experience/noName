import React from 'react';
import { shallow } from 'enzyme';
import { TabsBase } from './';
import List from '../List';
import Touchable from '../Touchable';
import Text from '../Text';

describe('Tabs', () => {
  let wrapper;
  let onChange;
  let data;

  beforeEach(() => {
    data = [
      { key: 'Hello', component: () => <Text>Hello</Text> },
      { key: 'Bonjour', component: () => <Text>Bonjour</Text> },
      { key: 'Ciao', component: () => <Text>Ciao</Text> },
    ];
    onChange = jest.fn();
    wrapper = shallow(<TabsBase data={data} onChange={onChange} />);
  });

  it('should create a list of three tab', () => {
    const list = wrapper.find(List);
    expect(list.prop('data')).toBe(data);
  });

  it('should trigger onChange event when a tab is clicked ', () => {
    const render = wrapper.find(List).prop('renderItem');
    const item = shallow(render(data[2], 2));
    item.find(Touchable).prop('onClick')(2);
    expect(onChange).toBeCalledWith(2);
  });

  it('should render an is-active item ', () => {
    const render = wrapper.find(List).prop('renderItem');
    const item = shallow(render(data[0]));
    expect(item.hasClass('is-active')).toBeTruthy();
  });

  it('should render an is-active item on the good item when initialKey is set ', () => {
    wrapper = shallow(<TabsBase data={data} onChange={onChange} initialKey="Ciao" />);
    const render = wrapper.find(List).prop('renderItem');
    const item = shallow(render(data[2]));
    expect(item.hasClass('is-active')).toBeTruthy();
  });

  it('should not render an is-active item ', () => {
    const render = wrapper.find(List).prop('renderItem');
    const item = shallow(render(data[1]));
    expect(item.hasClass('is-active')).toBeFalsy();
  });

  it('should transfert className prop ', () => {
    wrapper.setProps({ className: 'hello' });
    expect(wrapper.find('nav').hasClass('hello')).toBeTruthy();
  });
});
