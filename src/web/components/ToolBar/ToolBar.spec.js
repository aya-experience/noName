import React from 'react';
import { shallow } from 'enzyme';
import ToolBar from './';
import ButtonToolBar from './ButtonToolBar';

describe('ToolBar', () => {
  let wrapper;
  let data;
  let onClick;

  beforeEach(() => {
    data = [
      { name: 'UIModule', activated: false, icon: 'ion-home' },
      { name: 'UnknowModule', activated: false, icon: 'ion-home' },
      { name: 'RTCEventEmitter', activated: false, icon: 'ion-home' },
    ];
    onClick = jest.fn();
    wrapper = shallow(<ToolBar data={data} onClick={onClick} />);
  });

  it('should trigger onClick with a name as param', () => {
    const button = wrapper.find(ButtonToolBar).first();
    button.prop('onClick')('UIManager');
    expect(onClick).toBeCalledWith('UIManager');
  });

  it('should render 3 button', () => {
    expect(wrapper.find(ButtonToolBar)).toHaveLength(3);
  });

  it('should render transfert name, icon, and activated to button', () => {
    const button = wrapper.find(ButtonToolBar).first();
    expect(button.props()).toMatchObject(data[0]);
  });
});
