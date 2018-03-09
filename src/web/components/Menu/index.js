import React from 'react';
import PropTypes from 'prop-types';
import Subtitle from '../Subtitle';
import Text from '../Text';
import List from '../List';

const renderItem = (item) => {
  if (Object.prototype.hasOwnProperty.call(item, 'items') && item.items.length > 0) {
    return <Menu data={item} />;
  }
  return <Text>item.title</Text>;
};

export default function Menu({ data }) {
  return (
    <nav>
      <Subtitle>{data.title}</Subtitle>
      <List data={data.items} renderItem={renderItem} />
    </nav>
  );
}

// TODO ask help for 'menuType' was used before it was defined. (no-use-before-define)
const menuType = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.shape({ name: PropTypes.string.isRequired }),
    PropTypes.shape(menuType),
  ])).isRequired,
};

Menu.propTypes = {
  data: PropTypes.shape(menuType).isRequired,
};

Menu.defaultProps = {};
