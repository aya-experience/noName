import React from 'react';
import { shallow } from 'enzyme';
import AppBarMaterial from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from './index';
import Title from '../Title/index';

describe('AppBar', () => {
  it('should render a AppBar', () => {
    const wrapper = shallow(<AppBar title="React Native" />);
    expect(wrapper.find(AppBarMaterial)).toHaveLength(1);
  });

  it('should render a toolbar', () => {
    const wrapper = shallow(<AppBar title="React Native" />);
    expect(wrapper.find(Toolbar)).toHaveLength(1);
  });

  it('should render a Title', () => {
    const wrapper = shallow(<AppBar title="React Native" />);
    expect(wrapper.find(Title)).toHaveLength(1);
  });

  it('should should pass the title props to Title', () => {
    const titleValue = 'React Native';
    const wrapper = shallow(<AppBar title={titleValue} />);
    const title = wrapper.find(Title);
    expect(title.prop('children')).toBe(titleValue);
  });
});
