import React from 'react';
import { mount } from 'enzyme';
import ConsoleLine from './';

describe('ConsoleLine', () => {
  let wrapper;
  let data;
  beforeEach(() => {
    data = { module: 'hello', method: 'world', args: ['Marvin', 'Alexandre', 'Zenika'] };
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
});
