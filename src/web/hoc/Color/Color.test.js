import React from 'react';
import { shallow } from 'enzyme';
import colorify from './';

const divComponent = props => <div {...props}>Hello World</div>;

describe('Color', () => {
  it('should add a className if a color prop is set', () => {
    const ColorDiv = colorify(divComponent);
    const wrapper = shallow(<ColorDiv color="primary">Test</ColorDiv>);
    expect(wrapper.find('div.is-primary'));
  });
});
