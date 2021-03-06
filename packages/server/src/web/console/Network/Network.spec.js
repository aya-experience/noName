import React from 'react';
import { shallow } from 'enzyme';
import Network from './';
import Console from '../../components/Console';
import NetworkLine from './NetworkLine';
import NetworkDetail from './NetworkDetail';

describe('Network', () => {
  let wrapper;
  let data;

  beforeEach(() => {
    data = [
      { method: 'get', url: 'https://localhost:3000/Braver' },
      { method: 'post', url: 'https://localhost:3000/BladeBeam' },
      { method: 'patch', url: 'https://localhost:3000/Climhazzard' },
      { method: 'put', url: 'https://localhost:3000/Meteorain' },
      { method: 'options', url: 'https://localhost:3000/FinishingTouch' },
      { method: 'head', url: 'https://localhost:3000/Omnislash' },
    ];
    wrapper = shallow(<Network data={data} />);
  });


  it('should have a console component with data and NetworkLine', () => {
    const consoleComponent = wrapper.find(Console);
    expect(consoleComponent.props()).toMatchObject({
      data,
      ComponentLine: NetworkLine,
    });
  });

  it('should past all other props to console', () => {
    const rest = {
      otherProp: 'Damages one enemy',
      anotherProp: 'Attack & Debuff: Damages one enemy, inflicts stop',
    };
    wrapper.setProps(rest);
    const consoleComponent = wrapper.find(Console);
    expect(consoleComponent.props()).toMatchObject(rest);
  });

  it('should updateSelected update the field selectedRequest', () => {
    const instance = wrapper.instance();
    const value = {};
    instance.setState = jest.fn();
    instance.updateSelected(value);
    expect(instance.setState).toBeCalledWith({ selectedRequest: value });
  });


  it('should render NetworkDetail when selectedRequest is set', () => {
    const request = {
      method: 'GET', url: 'http://localhost', headers: [], data: {}, responseType: 'text',
    };
    wrapper.setState({ selectedRequest: request });
    expect(wrapper.find(NetworkDetail)).toHaveLength(1);
  });
});
