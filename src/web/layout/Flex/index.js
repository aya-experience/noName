import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh',
  },
  header: {
    order: 1,
  },
  content: {
    order: 2,
    flexGrow: 1,
    flexBasis: '100%',
    overflowY: 'auto',
  },
  footer: {
    order: 3,
  },
};

const Flex = ({
  header, children, footer,
}) => (
  <div style={styles.container}>
    {header && (
      <header style={styles.header}>
        {header}
      </header>
    )}

    <main style={styles.content}>
      {children}
    </main>

    {footer && (
      <footer style={styles.footer}>
        {footer}
      </footer>
    )}

  </div>
);

Flex.propTypes = {
  header: PropTypes.node,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
};

Flex.defaultProps = {
  header: null,
  footer: null,
};

export default Flex;
