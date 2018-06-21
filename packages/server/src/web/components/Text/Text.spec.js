import React from 'react';
import { shallow } from 'enzyme';
import Typography from '@material-ui/core/Typography';
import Text from './index';

describe('Text', () => {
  it('should give chidren to typography', () => {
    const wrapper = shallow(<Text>Hello</Text>);
    const typo = wrapper.find(Typography);
    expect(typo.prop('children')).toBe('Hello');
  });

  it('should pass align props', () => {
    const wrapper = shallow(<Text align="center">Hello</Text>);
    const typo = wrapper.find(Typography);
    expect(typo.prop('align')).toBe('center');
  });

  it('should have default value align = inherit', () => {
    const wrapper = shallow(<Text>Hello</Text>);
    const typo = wrapper.find(Typography);
    expect(typo.prop('align')).toBe('inherit');
  });

  it('should pass color props', () => {
    const wrapper = shallow(<Text color="primary">Hello</Text>);
    const typo = wrapper.find(Typography);
    expect(typo.prop('color')).toBe('primary');
  });

  it('should have default value color = default', () => {
    const wrapper = shallow(<Text>Hello</Text>);
    const typo = wrapper.find(Typography);
    expect(typo.prop('color')).toBe('default');
  });
});
