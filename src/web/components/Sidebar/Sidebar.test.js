import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from './';

describe('Sidebar', () => {
  let wrapper;
  let children;
  let content;

  beforeEach(() => {
    children = <div>children</div>;
    content = <div>content</div>;
    wrapper = shallow(<Sidebar content={content}>{children}</Sidebar>);
  });

  it('should render children component', () => {
    expect(wrapper.contains(children));
  });
  it('should render sidebar content', () => {
    expect(wrapper.contains(children));
  });
});
