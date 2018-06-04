import React from 'react';
import { shallow } from 'enzyme';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { LanguageJavascript, Cellphone } from 'mdi-material-ui';
import BridgeLine from './index';
import HighlightVariableText from '../../../components/HighlightVariableText/index';


describe('BridgeLine', () => {
  let line;
  let wrapper;

  beforeEach(() => {
    line = {
      type: 0, module: 'UIModule', method: 'createView', args: [0, 3, 3, 4, [4, 5]],
    };
    wrapper = shallow(<BridgeLine {...line} />);
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

  it('should render an icon LanguageJavascript if type = 0', () => {
    expect(wrapper.find(LanguageJavascript)).toHaveLength(1);
  });

  it('should render an icon Cellphone if mode = 1', () => {
    wrapper.setProps({ type: 1 });
    expect(wrapper.find(Cellphone)).toHaveLength(1);
  });

  it('should render module@methode in a ListItemSecondaryAction', () => {
    wrapper.setProps({ mode: 1 });
    // Need To be improved
    expect(wrapper.find(ListItemSecondaryAction).dive().dive().text()).toBe(`${line.module}@${line.method}`);
  });
});
