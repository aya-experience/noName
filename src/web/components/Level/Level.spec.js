import React from 'react';
import { shallow } from 'enzyme';
import Level from './';
import LevelItem from '../LevelItem';

describe('Level', () => {
  let content;
  let wrapper;

  beforeEach(() => {
    content = (
      <LevelItem>
        <div id="hello">Hello world</div>
      </LevelItem>
    );
    wrapper = shallow(<Level>{content}</Level>);
  });

  it('should render children component', () => {
    expect(wrapper.find('div.level').children()).toHaveLength(1);
  });
});
