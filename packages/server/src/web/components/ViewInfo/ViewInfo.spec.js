import React from 'react';
import { shallow } from 'enzyme';
import CardHeader from '@material-ui/core/CardHeader';
import ViewInfo from './index';
import ObjectListView from '../ObjectListView';

describe('ViewInfo', () => {
  let wrapper;
  let view;
  beforeEach(() => {
    view = { className: 'Hello', props: { className: 'trol', other: 'none' } };
    wrapper = shallow(<ViewInfo value={view} />);
  });

  it('should show in CardHeader the name of the view', () => {
    const header = wrapper.find(CardHeader).first();
    expect(header.prop('title')).toBe(view.className);
  });

  it('should show ObjectListView with props', () => {
    expect(wrapper.find(ObjectListView).first().prop('data')).toBe(view.props);
  });

  it('should not show ObjectListView if no props', () => {
    wrapper.setProps({ value: { ...view, props: null } });
    expect(wrapper.find(ObjectListView)).toHaveLength(0);
  });
});
