import React from 'react';
import { shallow } from 'enzyme';
import LoggerJS from './index';
import Console from '../../components/Console/index';
import LoggerJSLine from './LoggerJSLine/index';

describe('BridgeConsole', () => {
  let data;
  let wrapper;
  beforeEach(() => {
    data = [{
      mode: 0, module: 'LoggerJS', method: 'log', args: ['Hello World'],
    }];
    wrapper = shallow(<LoggerJS data={data} />);
  });

  it('should pass data and BridgeComponent to Logger', () => {
    expect(wrapper.find(Console).first().props()).toMatchObject({
      data, ComponentLine: LoggerJSLine,
    });
  });
});
