/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Highlight from '../Highlight/index';


const HighlightVariableText = ({ value, ...rest }) => (
  <Highlight {...rest} lang="json">
    {JSON.stringify(value)}
  </Highlight>
);

HighlightVariableText.propTypes = {
  value: PropTypes.any.isRequired,
};

export default HighlightVariableText;
