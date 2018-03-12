import React from 'react';
import { shallow } from 'enzyme';
import connect from './';

const divComponent = props => <div {...props}>Hello World</div>;

describe('Color', () => {
  it('should add a className if a color prop is set', () => {
    const ColorDiv = connect(divComponent);
    const wrapper = shallow(<ColorDiv color="primary">Test</ColorDiv>);
    expect(wrapper.find('div.is-primary'));
  });
});
