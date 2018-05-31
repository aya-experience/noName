import React from 'react';
import PropTypes from 'prop-types';
import List from '../List';
import AttributItemList from '../AttributItemList';

const ObjectListView = ({ data }) => {
  const items = Object.entries(data)
    .map(([key, value]) => ({
      key, attribut: key, value,
    }));
  return (
    <List data={items} Component={AttributItemList} />
  );
};

ObjectListView.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default ObjectListView;
