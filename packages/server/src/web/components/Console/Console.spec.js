import React from 'react';
import { shallow } from 'enzyme';
import Console from './index';
import ClickableList from '../ClickableList';

describe('Console', () => {
  let wrapper;
  let data;
  let component;
  beforeEach(() => {
    component = props => props.toString();
    data = [
      {
        mode: 0, module: 'UIModule', methode: 'createView', args: [5, 6, [3, 4]],
      },
      {
        mode: 0, module: 'UIModule', methode: 'createView', args: [5, 6, [3, 4]],
      },
      {
        mode: 0, module: 'UIModule', methode: 'createView', args: [5, 6, [3, 4]],
      },
      {
        mode: 0, module: 'UIModule', methode: 'createView', args: [5, 6, [3, 4]],
      },
      {
        mode: 0, module: 'UIModule', methode: 'createView', args: [5, 6, [3, 4]],
      },
    ];
    wrapper = shallow(<Console data={data} ComponentLine={component} />);
  });

  it('should pass data to ClickableList', () => {
    expect(wrapper.find(ClickableList).prop('data')).toBe(data);
  });

  it('should pass ComponentLine to ClickableList', () => {
    expect(wrapper.find(ClickableList).prop('Component')).toBe(component);
  });
});
