import React from 'react';
import { shallow } from 'enzyme';
import Item from './';

describe('Item', () => {
  let wrapper;
  let data;
  let renderItem;

  beforeEach(() => {
    data = { id: 'GDJETI12K3J4L', name: 'turtle' };
    renderItem = item => <div>{item.name}</div>;
    wrapper = shallow(<Item item={data} render={renderItem} />);
  });

  it('should render a li with a content created by render func', () => {
    const li = wrapper.find('li');
    expect(li.contains(renderItem(data))).toBeTruthy();
  });
});
