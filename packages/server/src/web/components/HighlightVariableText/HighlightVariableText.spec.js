import React from 'react';
import { shallow } from 'enzyme';
import HighlightVariableText from './index';
import Highlight from '../Highlight/index';


describe('HighlightVariableText', () => {
  it('should give a stringified values to Highlight ', () => {
    const content = [1, 3, 4, 5];
    const wrapper = shallow(<HighlightVariableText value={content} />);
    expect(wrapper.find(Highlight).prop('children')).toEqual('[1,3,4,5]');
  });
});
