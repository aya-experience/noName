import React from 'react';
import { shallow } from 'enzyme';
import MainMenu from './';
import Menu from '../../../components/Menu';

describe('MainMenu', () => {
  it('should pass menudata to menu props', () => {
    const wrapper = shallow(<MainMenu />);
    expect(wrapper.find(Menu).props('data')).not.toBeNull();
  });
});
