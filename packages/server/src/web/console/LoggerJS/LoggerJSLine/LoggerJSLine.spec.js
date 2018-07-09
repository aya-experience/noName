import React from 'react';
import { shallow } from 'enzyme';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Information } from 'mdi-material-ui';
import LoggerJSLine from './index';
import HighlightVariableText from '../../../components/HighlightVariableText/index';


describe('LoggerJSLine', () => {
  let line;
  let wrapper;

  beforeEach(() => {
    line = {
      method: 'info', args: [0, 3, 3, 4, [4, 5]],
    };
    wrapper = shallow(<LoggerJSLine {...line} />);
  });

  it('should render a ListItem', () => {
    expect(wrapper.find(ListItem)).toHaveLength(1);
  });

  it('should have HighlightVariableText in a ListItemText ', () => {
    const code = wrapper.find(HighlightVariableText).first();
    const container = wrapper.find(ListItemText);
    expect(container).toEqual(code.parent());
  });

  it('should pass args to HighlightVariableText', () => {
    const code = wrapper.find(HighlightVariableText).first();
    expect(code.prop('value')).toBe(line.args);
  });

  it('should render information icon', () => {
    const icon = wrapper.find(Information);
    expect(icon).toHaveLength(1);
  });
});
