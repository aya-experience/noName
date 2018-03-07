import React from 'react';
import PropTypes from 'prop-types';
import Typographie from '../Typography';

export default function Title(props) {
  return (
    <Typographie tag="h1" className="title" {...props}>
      {props.children}
    </Typographie>
  );
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.number,
};

Title.defaultProps = {
  size: 1,
};
