import React from 'react';
import { shallow } from 'enzyme';
import Main from './index';
import AppBar from '../../components/AppBar/index';

describe('Main', () => {
  let wrapper;
  let children;
  let title;

  beforeEach(() => {
    title = 'React Native';
    children = <div id="toto">toto</div>;
    wrapper = shallow(<Main title={title}>{children}</Main>);
  });

  it('should render children component', () => {
    expect(wrapper.find('div#toto')).toHaveLength(1);
  });
});
