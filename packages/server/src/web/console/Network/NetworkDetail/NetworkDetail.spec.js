import React from 'react';
import { shallow } from 'enzyme';
import NetworkDetail from './index';
import { CardHeader } from '@material-ui/core';
import ObjectListView from '../../../components/ObjectListView';
import HighlightVariableText from '../../../components/HighlightVariableText';

describe('NetworkDetail', () => {
  let wrapper;
  let request;

  beforeEach(() => {
    request = {
      method: 'GET', url: 'http://localhost', headers: [], data: {}, responseType: 'text',
    };
    wrapper = shallow(<NetworkDetail request={request} />);
  });

  it('should render a CardHeader who show method responstype and subheader', () => {
    const cardHeader = wrapper.find(CardHeader);

    expect(cardHeader.props()).toMatchObject({
      title: `${request.method} - ${request.responseType}`,
      subheader: request.url,
    });
  });

  it('should not show headers if header is empty', () => {
    expect(wrapper.find(ObjectListView)).toHaveLength(0);
  });

  it('should render headers when it is not empty', () => {
    wrapper.setProps({ request: { ...request, headers: [['accept', 'application/json']] } });
    expect(wrapper.find(ObjectListView).at(0).prop('data')).toEqual({ accept: 'application/json' });
  });

  it('should render data if is set', () => {
    const data = { value: 'hello world' };
    wrapper.setProps({ request: { ...request, data } });
    expect(wrapper.find(HighlightVariableText).at(0).prop('value')).toBe(data);
  });
});
