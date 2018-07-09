import React from 'react';
import { shallow } from 'enzyme';
import ObjectListView from './index';
import List from '../List/index';

describe('ObjectListView', () => {
  it('should pass to list an array of object with attribut and value attribut', () => {
    const value = { backgroundColor: 'blue', margin: '1px' };
    const wrapper = shallow(<ObjectListView data={value} />);
    const list = wrapper.find(List);
    expect(list.prop('data')).toEqual([
      { attribut: 'backgroundColor', key: 'backgroundColor', value: 'blue' },
      { attribut: 'margin', key: 'margin', value: '1px' },
    ]);
  });
});
