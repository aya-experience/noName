import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import { shallow } from 'enzyme';
import NetworkLine from './';


describe('NetworkLine', () => {
  let method;
  let url;
  let wrapper;
  beforeEach(() => {
    method = 'get';
    url = 'https://localhost:3000/';
    wrapper = shallow(<NetworkLine method={method} url={url} />);
  });

  it('should show the method props in a list text item', () => {
    const textArea = wrapper.find(ListItemText).first();
    expect(textArea.prop('primary')).toBe(method);
  });

  it('should show the url props in a list text item', () => {
    const textArea = wrapper.find(ListItemText).last();
    expect(textArea.prop('primary')).toBe(url);
  });
});
