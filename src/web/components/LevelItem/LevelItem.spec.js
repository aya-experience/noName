import React from 'react';
import { shallow } from 'enzyme';
import LevelItem from './';

describe('Level', () => {
  let content;
  let wrapper;

  beforeEach(() => {
    content = <div id="hello">Hello world</div>;
    wrapper = shallow(<LevelItem>{content}</LevelItem>);
  });

  it('should render children component', () => {
    expect(wrapper.find('div.level-item').children()).toHaveLength(1);
  });
});
