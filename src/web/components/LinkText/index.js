import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import typography from '../../hoc/Typography';

export function LinkText({ children, className, href }) {
  return (
    <Link href={href}>
      <a href={href} className={className}>
        {children}
      </a>
    </Link>
  );
}

LinkText.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
};

LinkText.defaultProps = {
  className: '',
};

export default typography(LinkText);
