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
    renderItem = item => <Item key={item.id}>{item.name}</Item>;
    wrapper = shallow(<List data={data} renderItem={renderItem} />);
  });

  it('should render an Item component per item in data', () => {
    expect(wrapper.find(Item)).toHaveLength(3);
  });

  it('should return null if data is an empty list', () => {
    wrapper.setProps({ data: [] });
    expect(wrapper.isEmptyRender()).toBeTruthy();
  });
});
