import React from 'react';
import { shallow } from 'enzyme';
import ButtonToolBar from './';
import Button from '../../Button';
import Icon from '../../Icon';

describe('ButtonToolBar', () => {
  let wrapper;
  let onClick;

  beforeEach(() => {
    onClick = jest.fn();
    wrapper = shallow(<ButtonToolBar onClick={onClick} name="UIManager" />);
  });

  it('should trigger an event with name when Button is clicked', () => {
    const button = wrapper.find(Button);
    button.simulate('click');
    expect(onClick).toBeCalledWith('UIManager');
  });

  it('should transfert className to button', () => {
    wrapper.setProps({ className: 'hello' });
    const button = wrapper.find(Button);
    expect(button.prop('className')).toBe('hello');
  });

  it('should render an info color button when activated is true', () => {
    wrapper.setProps({ activated: true });
    const button = wrapper.find(Button);
    expect(button.prop('color')).toBe('info');
  });

  it('should render an custom color button when activated is true and color is set', () => {
    wrapper.setProps({ activated: true, color: 'danger' });
    const button = wrapper.find(Button);
    expect(button.prop('color')).toBe('danger');
  });

  it('should render an icon when icon is set', () => {
    wrapper.setProps({ icon: 'ion-home' });
    const icon = wrapper.find(Icon);
    expect(icon.prop('name')).toBe('ion-home');
  });

  it('should not render an icon by default', () => {
    console.log(wrapper.debug());
    expect(wrapper.find(Icon)).toHaveLength(0);
  });
});
