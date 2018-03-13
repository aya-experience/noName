import React from 'react';
import { shallow } from 'enzyme';
import Item from './';

describe('Item', () => {
  let wrapper;
  let data;
  let content;

  beforeEach(() => {
    data = { id: 'GDJETI12K3J4L', name: 'turtle' };
    content = <div>{data.name}</div>;
    wrapper = shallow(<Item content={content} />);
  });

  it('should render a li with a content created by render func', () => {
    const li = wrapper.find('li');
    expect(li.contains(content)).toBeTruthy();
  });
});
