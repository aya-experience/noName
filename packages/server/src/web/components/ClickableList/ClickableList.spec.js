import React from 'react';
import { shallow } from 'enzyme';
import MaterialList from '@material-ui/core/List';
import ClickableList from './index';


describe('ClickableList', () => {
  let component;
  let wrapper;
  let data;

  beforeEach(() => {
    component = props => props.toString();
    data = [
      { value: 'Alexandre', key: 'A1' },
      { value: 'Alexandre', key: 'A2' },
      { value: 'Alexandre', key: 'A3' },
      { value: 'Alexandre' },
    ];
    wrapper = shallow(<ClickableList data={data} Component={component} />);
  });

  it('should render all item in data with component', () => {
    const items = wrapper.find(MaterialList).children();
    expect(items).toHaveLength(data.length);
  });

  it('should pass the style props to MaterialList', () => {
    const style = { backgroundColor: 'blue' };
    wrapper.setProps({ style });
    expect(wrapper.find(MaterialList).prop('style')).toBe(style);
  });

  it('should pass the className props to MaterialList', () => {
    const className = 'list';
    wrapper.setProps({ className });
    expect(wrapper.find(MaterialList).prop('className')).toBe(className);
  });
});
