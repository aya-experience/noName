import React from 'react';
import { shallow } from 'enzyme';
import Head from 'next/head';
import Layout from './';
import Container from '../../components/Container/';

describe('Bulma', () => {
  let content;
  let title;
  let wrapper;

  beforeEach(() => {
    title = 'test';
    content = <div id="test">Hello world</div>;
    wrapper = shallow(<Layout title={title}>{content}</Layout>);
  });

  it('should render a container', () => {
    const children = wrapper.find(Container);
    expect(children.prop('children')).toEqual(content);
  });

  it('should render a container with children prop', () => {
    const children = wrapper.find(Container);
    expect(children.prop('children')).toEqual(content);
  });

  it('should render head with title', () => {
    const head = wrapper.find(Head);
    expect(head.find('title').text()).toEqual(title);
  });
});
