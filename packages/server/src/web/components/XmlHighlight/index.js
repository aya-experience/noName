/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Highlight from '../Highlight/index';


const XmlHighlight = ({ children, ...rest }) => (
  <Highlight {...rest} lang="HTML">
    {children}
  </Highlight>
);

XmlHighlight.propTypes = {
  children: PropTypes.any.isRequired,
};

export default XmlHighlight;
