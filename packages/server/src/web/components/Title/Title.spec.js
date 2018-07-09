import React from 'react';
import { shallow } from 'enzyme';
import Typography from '@material-ui/core/Typography';
import Title from './index';
import { COLOR, COLOR_DEFAULT } from '../../constant.json';


describe('Title', () => {
  it('should pass children props to Typogaphy', () => {
    const children = 'Hello React-native';
    const wrapper = shallow(<Title>{children}</Title>);
    const typography = wrapper.find(Typography);
    expect(typography.prop('children')).toBe(children);
  });

  it('should pass default color to Typography', () => {
    const children = 'Hello React-native';
    const wrapper = shallow(<Title>{children}</Title>);
    const typography = wrapper.find(Typography);
    expect(typography.prop('color')).toBe(COLOR_DEFAULT);
  });

  it('should pass color prop to Typography', () => {
    const children = 'Hello React-native';
    const color = COLOR[0];
    const wrapper = shallow(<Title color={color}>{children}</Title>);
    const typography = wrapper.find(Typography);
    expect(typography.prop('color')).toBe(color);
  });

  it('should pass className to Typography', () => {
    const children = 'Hello React-native';
    const classe = 'title';
    const wrapper = shallow(<Title className={classe}>{children}</Title>);
    const typography = wrapper.find(Typography);
    expect(typography.prop('className')).toBe(classe);
  });

  it('should pass style to Typography', () => {
    const children = 'Hello React-native';
    const style = { backgroundColor: 'blue' };
    const wrapper = shallow(<Title style={style}>{children}</Title>);
    const typography = wrapper.find(Typography);
    expect(typography.prop('style')).toBe(style);
  });
});
