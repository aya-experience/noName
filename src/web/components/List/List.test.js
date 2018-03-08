import React from 'react';
import { shallow } from 'enzyme';
import List from './';
import Item from '../Item';

describe('List', () => {
  let wrapper;
  let data;
  let renderItem;

  beforeEach(() => {
    data = [
      { id: 'hashID1', name: 'hamtaro' },
      { id: 'hashID2', name: 'mickael' },
      { id: 'hashID3', name: 'aya' },
    ];
    renderItem = item => <div>{item.name}</div>;
    wrapper = shallow(<List data={data} renderItem={renderItem} />);
  });

  it('should render an Item component per item in data', () => {
    expect(wrapper.find(Item)).toHaveLength(3);
  });

  it('should return null if data is an empty list', () => {
    wrapper.setProps({ data: [] });
    expect(wrapper.isEmptyRender()).toBeTruthy();
  });

  it('should render an Item component with a key equal to the element index by default (first item)', () => {
    const item = wrapper.find(Item).first();
    expect(item.key()).toBe('0');
  });

  it('should render an Item component with a key equal to the element index by default (last item)', () => {
    const item = wrapper.find(Item).last();
    expect(item.key()).toBe('2');
  });

  it('should render an Item component with a key equal to the element index by default (last item)', () => {
    const item = wrapper.find(Item).last();
    expect(item.key()).toBe('2');
  });

  it('should render an Item component with a personalized key when keyName is set', () => {
    wrapper.setProps({ keyName: 'id' });
    const item = wrapper.find(Item).first();
    expect(item.key()).toBe('hashID1');
  });
});
