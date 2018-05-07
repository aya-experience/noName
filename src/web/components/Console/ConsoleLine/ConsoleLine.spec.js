import React from 'react';
import { mount } from 'enzyme';
import ConsoleLine from './';

describe('ConsoleLine', () => {
  let wrapper;
  let data;
  beforeEach(() => {
    data = {
      type: 0,
      module: 'hello',
      method: 'world',
      args: ['Marvin', 'Alexandre', 'Zenika'],
    };
    wrapper = mount(<ConsoleLine data={data} />);
  });

  it('should render module name', () => {
    expect(wrapper.text().includes(data.module)).toBeTruthy();
  });

  it('should render method name', () => {
    expect(wrapper.text().includes(data.method)).toBeTruthy();
  });

  it('should render args item', () => {
    expect(wrapper.text().includes(JSON.stringify(data.args))).toBeTruthy();
  });

  it('should have #ff8989 color when type = 0', () => {
    const li = wrapper.find('li');
    expect(li.prop('style').backgroundColor).toBe('#ff8989');
  });

  it('should have #a1f28e color when type = 1', () => {
    data.type = 1;
    wrapper.setProps({ data });
    const li = wrapper.find('li');
    expect(li.prop('style').backgroundColor).toBe('#a1f28e');
  });
});
