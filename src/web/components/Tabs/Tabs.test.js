import React from 'react';
import { shallow } from 'enzyme';
import Tabs from './';

describe('Tabs', () => {
  let wrapper;
  let onSelected;

  beforeEach(() => {
    const tabs = ['Hello', 'Bonjour', 'Ciao'];
    onSelected = jest.fn();
    wrapper = shallow(<Tabs tab={tabs} onSelected={onSelected} />);
  });

  it('should create a list of three tab', () => {});
  it('should trigger onSelected event when a tab is clicked ', () => {});
});
