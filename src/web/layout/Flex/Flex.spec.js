import React from 'react';
import { shallow } from 'enzyme';
import Flex from './index';

describe('Flex', () => {
  let wrapper;
  let footer;
  let content;
  let header;

  beforeEach(() => {
    footer = <div id="footer"> I am footer </div>;
    header = <div id="header"> I am header </div>;
    content = (
      <div id="content">
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet cumque dicta distinctio error exercitationem
        expedita ipsum iusto labore molestias odit, optio possimus quaerat qui repudiandae, rerum suscipit, vel veniam.
        </div>
        <div>Aspernatur at deleniti ducimus labore minus nam natus, nobis quod sapiente veritatis. Accusantium ad
        adipisci, alias consequatur culpa distinctio dolorem, excepturi expedita illum molestias, necessitatibus odio
        quis suscipit unde voluptate.
        </div>
        <div>Ab aliquam commodi culpa cumque ducimus ea, error esse exercitationem facere fugit illum inventore iste
        magnam maiores necessitatibus nobis obcaecati officia perferendis quaerat quam qui ut vel velit vitae
        voluptates!
        </div>
        <div>At dolorum harum laudantium nisi optio sunt voluptate! At, autem blanditiis deleniti et facere id impedit
        omnis, saepe suscipit, ut vel veniam? Fugiat, incidunt odio perferendis perspiciatis porro quaerat vel!
        </div>
      </div>
    );
    wrapper = shallow(<Flex header={header} footer={footer}>{content}</Flex>);
  });

  it('should render header', () => {
    expect(wrapper.find('header').children()).toHaveLength(1);
  });

  it('should render content', () => {
    expect(wrapper.find('main').children()).toHaveLength(1);
  });

  it('should render footer', () => {
    expect(wrapper.find('footer').children()).toHaveLength(1);
  });
});
