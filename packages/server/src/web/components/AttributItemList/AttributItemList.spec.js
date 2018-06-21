import React from 'react';
import { shallow } from 'enzyme';
import AttributItemList from './index';
import Text from '../Text/index';
import HighlightVariableText from '../HighlightVariableText/index';

describe('AttributItemList', () => {
  let item;
  let wrapper;

  beforeEach(() => {
    item = { attribut: 'Hello', value: 'world' };
    wrapper = shallow(<AttributItemList {...item} />);
  });

  it('should create a text with a children prop', () => {
    const text = wrapper.find(Text).first();
    expect(text.prop('children').join('')).toEqual('Hello :');
  });

  it('should create pass item to HighlightVariableText', () => {
    const text = wrapper.find(HighlightVariableText).first();
    expect(text.prop('value')).toBe(item.value);
  });
});
