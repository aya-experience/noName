import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';

const index = (props) => {
  const { className, props: properties } = props.view;
  const styledProperties = Object.keys(properties)
    .map(prop => `${prop}="${properties[prop]}"`)
    .join(' ');
  const content = `<${className} ${styledProperties} />`;
  return <Text {...props}>{content}</Text>;
};

index.propTypes = {
  view: PropTypes.shape({
    className: PropTypes.string.isRequired,
    props: PropTypes.object,
  }).isRequired,
};

export default index;
