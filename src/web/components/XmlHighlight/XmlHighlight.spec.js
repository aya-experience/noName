import React from 'react';
import { shallow } from 'enzyme';
import Highlight from '../Highlight/index';
import XmlHighlight from './index';

describe('XmlHighlight', () => {
  it('should pass children component to Highlight', () => {
    const wrapper = shallow(<XmlHighlight>{'<Balise></Balise>'}</XmlHighlight>);
    expect(wrapper.find(Highlight).first().prop('children')).toBe('<Balise></Balise>');
  });
});
