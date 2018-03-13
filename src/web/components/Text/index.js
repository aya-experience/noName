import React from 'react';
import PropTypes from 'prop-types';
import connect from '../../hoc/Typography';

function Text({ children, className }) {
  return <p className={className}>{children}</p>;
}

Text.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Text.defaultProps = {
  className: '',
};

export default connect(Text);
