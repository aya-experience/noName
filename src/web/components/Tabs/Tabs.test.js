import React from 'react';
import { shallow } from 'enzyme';
import { TabsBase } from './';
import List from '../List';

describe('Tabs', () => {
  let wrapper;
  let onSelected;
  let data;

  beforeEach(() => {
    data = ['Hello', 'Bonjour', 'Ciao'];
    onSelected = jest.fn();
    wrapper = shallow(<TabsBase data={data} onSelected={onSelected} index={0} />);
  });

  it('should create a list of three tab', () => {
    const list = wrapper.find(List);
    expect(list.prop('data')).toBe(data);
  });

  it('should trigger onSelected event when a tab is clicked ', () => {
    const render = wrapper.find(List).prop('renderItem');
    const item = shallow(render(data[3], 3));
    item.find('a').simulate('click');
    expect(onSelected).toBeCalledWith(3);
  });

  it('should render an is-active item ', () => {
    const render = wrapper.find(List).prop('renderItem');
    const item = shallow(render(data[0], 0));
    expect(item.hasClass('is-active')).toBeTruthy();
  });

  it('should not render an is-active item ', () => {
    const render = wrapper.find(List).prop('renderItem');
    const item = shallow(render(data[1], 1));
    expect(item.hasClass('is-active')).toBeFalsy();
  });
});
