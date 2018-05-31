import React from 'react';
import { shallow } from 'enzyme';
import TextField from '@material-ui/core/TextField';
import BridgeFilterForm, { format } from './index';


describe('BridgeFilterForm', () => {
  let wrapper;
  let onChange;
  let module;
  let method;

  beforeEach(() => {
    onChange = jest.fn();
    module = 'UIModule';
    method = 'createView';
    wrapper = shallow(<BridgeFilterForm onChange={onChange} module={module} method={method} />);
  });

  it('should have a module Input', () => {
    const moduleInput = wrapper.find(TextField).first();
    expect(moduleInput.props()).toMatchObject({
      value: module,
      onChange: expect.any(Function),
    });
  });

  it('should have a method Input', () => {
    const methodInput = wrapper.find(TextField).last();
    expect(methodInput.props()).toMatchObject({
      value: method,
      onChange: expect.any(Function),
    });
  });

  it('should call onChange props with {[name]:value}', () => {
    const name = 'module';
    const value = 'toto';
    format(onChange, name)({ target: { value } });
    expect(onChange).toBeCalledWith({ [name]: value });
  });
});
