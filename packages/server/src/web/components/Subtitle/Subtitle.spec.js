import React from 'react';
import { shallow } from 'enzyme';
import Typography from '@material-ui/core/Typography';
import Subtitle from './index';
import { COLOR, COLOR_DEFAULT } from '../../constant.json';


describe('Subtile', () => {
  it('should pass children props to Typogaphy', () => {
    const children = 'Hello React-native';
    const wrapper = shallow(<Subtitle>{children}</Subtitle>);
    const typography = wrapper.find(Typography);
    expect(typography.prop('children')).toBe(children);
  });

  it('should pass default color to Typography', () => {
    const children = 'Hello React-native';
    const wrapper = shallow(<Subtitle>{children}</Subtitle>);
    const typography = wrapper.find(Typography);
    expect(typography.prop('color')).toBe(COLOR_DEFAULT);
  });

  it('should pass color prop to Typography', () => {
    const children = 'Hello React-native';
    const color = COLOR[0];
    const wrapper = shallow(<Subtitle color={color}>{children}</Subtitle>);
    const typography = wrapper.find(Typography);
    expect(typography.prop('color')).toBe(color);
  });

  it('should pass className to Typography', () => {
    const children = 'Hello React-native';
    const classe = 'title';
    const wrapper = shallow(<Subtitle className={classe}>{children}</Subtitle>);
    const typography = wrapper.find(Typography);
    expect(typography.prop('className')).toBe(classe);
  });

  it('should pass style to Typography', () => {
    const children = 'Hello React-native';
    const style = { backgroundColor: 'blue' };
    const wrapper = shallow(<Subtitle style={style}>{children}</Subtitle>);
    const typography = wrapper.find(Typography);
    expect(typography.prop('style')).toBe(style);
  });

  it('should pass h2 to typography when level =1', () => {
    const children = 'Hello React-native';
    const wrapper = shallow(<Subtitle level={1}>{children}</Subtitle>);
    const typography = wrapper.find(Typography);
    expect(typography.prop('component')).toBe('h2');
  });

  it('should pass h6 to typography when level = 5', () => {
    const children = 'Hello React-native';
    const wrapper = shallow(<Subtitle level={5}>{children}</Subtitle>);
    const typography = wrapper.find(Typography);
    expect(typography.prop('component')).toBe('h6');
  });
});
