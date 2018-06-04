/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Text from '../Text/index';
import Ignore from '../Ignore/index';

const Highlight = ({ lang, children, ...rest }) => (
  <SyntaxHighlighter
    PreTag={Ignore}
    codeTagProps={rest}
    CodeTag={Text}
    language={lang}
    useInlineStyles={false}
  >
    {children}
  </SyntaxHighlighter>
);

Highlight.propTypes = {
  lang: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
};

Highlight.defaultProps = {
  className: '',
};

export default Highlight;
