import React from 'react';
import { shallow } from 'enzyme';
import BridgeConsole from './index';
import Console from '../../components/Console/index';
import BridgeLine from './BridgeLine/index';
import BridgeFilterForm from './BridgeFilterForm/index';

describe('BridgeConsole', () => {
  let data;
  let wrapper;
  beforeEach(() => {
    data = [{
      mode: 0, module: 'UIModule', method: 'createView', args: [0, 3, 3, 4, [4, 5]],
    }, {
      mode: 0, module: 'UIModule', method: 'createView', args: [0, 3, 3, 4, [4, 5]],
    }, {
      mode: 0, module: 'UIModule', method: 'createView', args: [0, 3, 3, 4, [4, 5]],
    }, {
      mode: 0, module: 'UIModule', method: 'createView', args: [0, 3, 3, 4, [4, 5]],
    }];
    wrapper = shallow(<BridgeConsole data={data} />);
  });

  it('should pass data and BridgeComponent to Console', () => {
    expect(wrapper.find(Console).first().props()).toMatchObject({
      data, ComponentLine: BridgeLine,
    });
  });

  it('should by default pass empty module and empty method to filterForm', () => {
    const form = wrapper.find(BridgeFilterForm).first();
    expect(form.props()).toMatchObject({
      module: '',
      method: '',
      onChange: wrapper.instance().filterChange,
    });
  });

  it('should update module of filterForm', () => {
    wrapper.setState({ filters: { ...wrapper.state().filters, module: 'UIModule' } });
    const form = wrapper.find(BridgeFilterForm).first();
    expect(form.props()).toMatchObject({
      module: 'UIModule',
      method: '',
      onChange: wrapper.instance().filterChange,
    });
  });

  it('should update method of filterForm', () => {
    wrapper.setState({ filters: { ...wrapper.state().filters, method: 'createView' } });
    const form = wrapper.find(BridgeFilterForm).first();
    expect(form.props()).toMatchObject({
      method: 'createView',
      module: '',
      onChange: wrapper.instance().filterChange,
    });
  });

  it('should call setState when filterChange is call', () => {
    const instance = wrapper.instance();
    instance.setState = jest.fn();
    instance.filterChange({ module: 'UIModule' });
    expect(instance.setState).toBeCalledWith({ filters: { method: '', module: 'UIModule' } });
  });
});
