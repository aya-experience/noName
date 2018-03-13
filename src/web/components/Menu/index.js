import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import List from '../List';
import Item from '../Item';

const renderItem = (item) => {
  if (item.items && item.items.length) {
    return (
      <Item key={item.name}>
        <Menu data={item} />
      </Item>
    );
  }
  return (
    <Item key={item.name}>
      <Text>{item.name}</Text>
    </Item>
  );
};

export default function Menu({ data }) {
  return (
    <nav>
      <Text className="menu-label">{data.name}</Text>
      <List className="menu-list" data={data.items} renderItem={renderItem} />
    </nav>
  );
}

const menuType = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.shape({ name: PropTypes.string.isRequired }),
    PropTypes.shape({}),
  ])).isRequired,
};

Menu.propTypes = {
  data: PropTypes.shape(menuType).isRequired,
};

Menu.defaultProps = {};
