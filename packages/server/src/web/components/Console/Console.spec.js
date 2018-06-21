import React from 'react';
import Paper from '@material-ui/core/Paper';
import { shallow } from 'enzyme';
import Console from './index';
import List from '../List/index';

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

  it('should pass data to List', () => {
    expect(wrapper.find(List).prop('data')).toBe(data);
  });

  it('should pass ComponentLine to List', () => {
    expect(wrapper.find(List).prop('Component')).toBe(component);
  });
});
