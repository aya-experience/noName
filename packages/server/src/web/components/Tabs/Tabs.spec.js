import React from 'react';
import MaterialTabs from '@material-ui/core/Tabs';
import MaterialTab from '@material-ui/core/Tab';
import { shallow } from 'enzyme';
import Tabs from './index';

describe('Tabs', () => {
  let initial;
  let wrapper;
  let items;
  beforeEach(() => {
    initial = 'javascript';
    items = [
      { label: 'Bridge', value: 'bridge', component: () => <div id="bridgeComponent">Hello Bridge</div> },
      { label: 'JS', value: 'javascript', component: () => <div id="jsComponent">Hello JS</div> },
    ];
    wrapper = shallow(<Tabs initial={initial} items={items} />).dive();
  });

  it('should pass onChange to MaterialTabs', () => {
    const materialTabs = wrapper.find(MaterialTabs).first();
    expect(materialTabs.prop('onChange')).toBe(wrapper.instance().onChange);
  });

  it('should pass initial to first value of MaterialTabs', () => {
    const materialTabs = wrapper.find(MaterialTabs).first();
    expect(materialTabs.prop('value')).toBe(initial);
  });

  it('should pass items[0].value to first value of MaterialTabs', () => {
    wrapper = shallow(<Tabs items={items} />).dive();
    const materialTabs = wrapper.find(MaterialTabs).first();
    expect(materialTabs.prop('value')).toBe('bridge');
  });

  it('should pass 0 to first value of MaterialTabs', () => {
    const transform = item => ({ label: item.label, component: item.component });
    wrapper = shallow(<Tabs items={items.map(transform)} />).dive();
    const materialTabs = wrapper.find(MaterialTabs).first();
    expect(materialTabs.prop('value')).toBe(0);
  });

  it('should render a Tab by item', () => {
    expect(wrapper.find(MaterialTab)).toHaveLength(items.length);
  });

  it('should render tab selected', () => {
    const component = wrapper.find('#jsComponent');
    expect(component).toHaveLength(1);
  });

  it('should call this setState when onChange is call', () => {
    const instance = wrapper.instance();
    const value = 'bridge';
    instance.setState = jest.fn();
    instance.onChange({}, value);
    expect(instance.setState).toBeCalledWith({ value });
  });

  it('should call onChange when onChange is call', () => {
    const onChange = jest.fn();
    wrapper.setProps({ onChange });
    const instance = wrapper.instance();
    const value = 'bridge';
    instance.onChange({}, value);
    expect(onChange).toBeCalledWith(value);
  });

  it('should pass className to MaterialTabs', () => {
    wrapper.setProps({ className: 'toto' });
    expect(wrapper.find(MaterialTabs).prop('className')).toBe('toto');
  });

});
