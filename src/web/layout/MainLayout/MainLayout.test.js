import React from 'react';
import { shallow } from 'enzyme';
import Head from 'next/head';
import MainLayout from './';
import Container from '../../components/Container/';

describe('MainLayout', () => {
  let content;
  let title;
  let wrapper;

  beforeEach(() => {
    title = 'No Name';
    content = <div id="hello">Hello world</div>;
    wrapper = shallow(<MainLayout title={title}>{content}</MainLayout>);
  });

  it('should render a Container with children prop', () => {
    const children = wrapper.find(Container);
    expect(children.prop('children')).toEqual(content);
  });

  it('should render Head with title', () => {
    const head = wrapper.find(Head);
    expect(head.find('title').text()).toEqual(title);
  });
});
