import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from './';
import Button from '../Button';
import Text from '../Text';

describe('Dropdown', () => {
  let wrapper;
  let dropdownContent;
  let buttonContent;

  beforeEach(() => {
    dropdownContent = <div>You can put a menu here</div>;
    buttonContent = <Text>Hello dropdown</Text>;
    wrapper = shallow(<Dropdown content={dropdownContent}>{buttonContent}</Dropdown>);
  });

  it('should render name prop as text of the button', () => {
    expect(wrapper.find(Button).prop('children')).toBe(buttonContent);
  });

  it('should render children if the button is clicked', () => {
    const button = wrapper.find(Button);
    button.simulate('click');
    expect(wrapper.contains(dropdownContent)).toBeTruthy();
  });

  it('should add is-active class if the button is clicked', () => {
    const button = wrapper.find(Button);
    button.simulate('click');
    expect(wrapper.find('.dropdown.is-active')).toBeTruthy();
  });
});
