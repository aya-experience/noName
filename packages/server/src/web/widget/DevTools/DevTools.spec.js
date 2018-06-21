import React from 'react';
import { shallow } from 'enzyme';
import DevTools from './index';
import Tabs from '../../components/Tabs/index';
import BridgeConsole from '../../console/BridgeConsole/index';

describe('DevTools', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<DevTools />);
  });

  it('should render a Tabs', () => {
    const tabs = wrapper.find(Tabs);
    expect(tabs).toHaveLength(1);
  });

  it('should return an array of items tab', () => {
    const instance = wrapper.instance();
    const items = instance.getItems();
    expect(items).toHaveLength(1);
  });

  it('should have component func in the first item', () => {
    const instance = wrapper.instance();
    const item = instance.getItems()[0];
    expect(item.component().type).toEqual(BridgeConsole);
  });

  it('should dataMerger merge data and newData', () => {
    const data = ['toto', 'titi'];
    const newData = ['tutu', 'tata'];
    expect(DevTools.dataMerger(data)(newData)).toEqual(['tata', 'tutu', 'toto', 'titi']);
  });

  it('should dataMerger merge data and newData and limit the number', () => {
    const data = ['toto', 'titi'];
    const newData = ['tutu', 'tata'];
    expect(DevTools.dataMerger(data, 3)(newData)).toEqual(['tata', 'tutu', 'toto']);
  });

  it('should noEmpty return true when the array given is not empty', () => {
    expect(DevTools.noEmpty([1])).toBeTruthy();
  });

  it('should noEmpty return false when empty array is given', () => {
    expect(DevTools.noEmpty([])).toBeFalsy();
  });

  it('should handleData call dataMerger with the state data', () => {
    const func = jest.fn();
    DevTools.dataMerger = jest.fn().mockReturnValue(func);
    const instance = wrapper.instance();
    const dataState = wrapper.state().bridgeData;
    instance.handleData([]);
    expect(DevTools.dataMerger).toBeCalledWith(dataState, 50);
  });

  it('should create a subscription when mounted', () => {
    expect(wrapper.instance().subscription).toBeDefined();
  });

  it('should remove a subscription when unmounted', () => {
    const instance = wrapper.instance();
    instance.subscription = { unsubscribe: jest.fn() };
    instance.componentWillUnmount();
    expect(instance.subscription.unsubscribe).toBeCalled();
  });

  it('should upateData call setState', () => {
    const instance = wrapper.instance();
    const data = ['lolololol0', 'lalalalala'];
    instance.setState = jest.fn();
    instance.updateData(data);
    expect(instance.setState).toBeCalledWith({ bridgeData: data });
  });
});
