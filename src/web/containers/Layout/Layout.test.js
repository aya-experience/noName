import React from 'react';
import { shallow } from 'enzyme';
import Head from 'next/head';
import Layout from './Layout';
import Container from '../../components/Container/Container';

describe('Render Layout', () => {
  const content = <div id="test">toto</div>;
  const title = 'test';
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Layout title={title}>{content}</Layout>);
  });

  it('should render a container with children prop', () => {
    const children = wrapper.find(Container);
    expect(children).toHaveLength(1);
    expect(children.prop('children')).toEqual(content);
  });

  it('should render head with title', () => {
    const head = wrapper.find(Head).shallow();
    const titleTag = head.find('title');
    expect(titleTag.text()).toEqual(title);
  });
});
