import React from 'react';
import { shallow } from 'enzyme';
import Console from './';
import List from '../List';
import ConsoleLine from './ConsoleLine';

describe('Console', () => {
  let wrapper;
  let data;

  beforeEach(() => {
    data = [
      { module: 'hello', method: 'world', args: ['Marvin', 'Alexandre', 'Zenika'] },
      { module: 'RTCEventEmitter', method: 'click', args: [33.6, 46.5] },
      { module: 'RTCEventEmitter', method: 'click', args: [33.6, 46.5] },
    ];
    wrapper = shallow(<Console data={data} />);
  });

  it('should have an list', () => {
    const list = wrapper.find(List);
    expect(list).toHaveLength(1);
  });

  it('should have an list with data props', () => {
    const list = wrapper.find(List);
    expect(list.prop('data')).toBe(data);
  });

  it('should have an list with renderList function', () => {
    const list = wrapper.find(List);
    expect(list.prop('renderItem')).toBeInstanceOf(Function);
  });

  it('should have an list with renderList function', () => {
    const renderItem = wrapper.find(List).prop('renderItem');
    const item = renderItem(data[0]);
    expect(item).toEqual(<ConsoleLine data={data[0]} />);
  });
});
