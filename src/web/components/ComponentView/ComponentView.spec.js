import React from 'react';
import { shallow } from 'enzyme';
import ComponentView from './';
import Text from '../Text';

describe('ComponentView', () => {
  let wrapper;
  let view;

  beforeEach(() => {
    view = { className: 'RTCView', props: { hello: 'world', backgroundColor: 'magenta' } };
    wrapper = shallow(<ComponentView view={view} />);
  });

  it('should render a Text compent with children prop', () => {
    expect(wrapper.find(Text).prop('children')).toEqual('<RTCView hello="world" backgroundColor="magenta" />');
  });
});
