/* eslint-disable react/forbid-prop-types */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


const Ignore = ({ children }) => (
  <Fragment>
    {children}
  </Fragment>
);

Ignore.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Ignore;
