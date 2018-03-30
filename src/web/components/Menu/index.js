import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import LinkText from '../LinkText';
import List from '../List';
import Item from '../Item';

const renderItem = ({ items, name, link }) => {
  if (items && items.length) {
    return (
      <Item key={name}>
        <Text className="menu-label">{name}</Text>
        <List data={items} className="menu-list" renderItem={renderItem} />
      </Item>
    );
  }
  return (
    <Item key={name}>
      <LinkText href={link}>{name}</LinkText>
    </Item>
  );
};
renderItem.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
};
renderItem.defaultProps = {
  link: '',
  items: null,
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
