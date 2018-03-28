import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import LinkText from '../LinkText';
import List from '../List';
import Item from '../Item';

const renderItem = (item) => {
  if (item.items && item.items.length) {
    return (
      <Item key={item.name}>
        <Text className="menu-label">{item.name}</Text>
        <List data={item.items} className="menu-list" renderItem={renderItem} />
      </Item>
    );
  }
  return (
    <Item key={item.name}>
      <LinkText href={item.link}>{item.name}</LinkText>
    </Item>
  );
};

export default function Menu({ data }) {
  return (
    <nav className="menu">
      <Text className="menu-label">{data.name}</Text>
      <List className="menu-list" data={data.items} renderItem={renderItem} />
    </nav>
  );
}

const menuType = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.shape({ name: PropTypes.string.isRequired, link: PropTypes.string }),
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      items: PropTypes.array,
    }),
  ])).isRequired,
};

Menu.propTypes = {
  data: PropTypes.shape(menuType).isRequired,
};

Menu.defaultProps = {};
