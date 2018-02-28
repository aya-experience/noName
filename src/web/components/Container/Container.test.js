import React from 'react';
import { shallow } from 'enzyme';

import Container from './Container';

describe('Render Container', () => {
  it('should render children component', () => {
    const content = <div id="test">toto</div>;
    const wrapper = shallow(<Container>{content}</Container>);
    const children = wrapper.find('div#test');
    expect(children).toHaveLength(1);
    expect(children.text()).toEqual('toto');
  });
});
