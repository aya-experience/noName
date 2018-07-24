import React from 'react';
import { shallow } from 'enzyme';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Highlight from './index';

describe('Highlight', () => {
  let wrapper;
  let value;
  let rest;

  beforeEach(() => {
    value = JSON.stringify(['hello word']);
    const rest = { prop1: 'hello', prop2: 'world' };
    wrapper = shallow(<Highlight lang="js" {...rest}>{value}</Highlight>);
  });

  it('should render a SyntaxHighlihter', () => {
    expect(wrapper.find(SyntaxHighlighter).at(0).props()).toMatchObject({
      language: 'js',
      children: value,
      ...rest,
    });
  });
});
