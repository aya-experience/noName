import React from 'react';
import { shallow } from 'enzyme';
import LevelArea from './';
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
    wrapper = shallow(<LevelArea position="right">{content}</LevelArea>);
  });

  it('should render children component', () => {
    expect(wrapper.find('div.level-right').children()).toHaveLength(1);
  });

  it('should render children component', () => {
    wrapper.setProps({ position: 'left' });
    expect(wrapper.find('div.level-left')).toHaveLength(1);
  });
});
