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

  it('should render a div with #efefef background color by default', () => {
    const color = wrapper
      .find('div')
      .children()
      .first()
      .prop('style').backgroundColor;

    expect(color).toBe('#efefef');
  });

  it('should render a div with #eeeeee background color', () => {
    wrapper.setProps({ color: '#eeeeee' });
    const color = wrapper
      .find('div')
      .children()
      .first()
      .prop('style').backgroundColor;

    expect(color).toBe('#eeeeee');
  });

  it('should render a div with 160px width by default', () => {
    const width = wrapper
      .find('div')
      .children()
      .first()
      .prop('style').width;

    expect(width).toBe('160px');
  });

  it('should render a div with 200px width', () => {
    wrapper.setProps({ width: '200px' });
    const width = wrapper
      .find('div')
      .children()
      .first()
      .prop('style').width;

    expect(width).toBe('200px');
  });
});
