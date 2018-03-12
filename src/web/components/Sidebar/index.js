import React from 'react';
import PropTypes from 'prop-types';

/**
 * Compute style based on props
 * @param color The line color
 * @param width The line width
 */
const computeStyle = (color, width) => ({
  drawer: {
    height: '100%',
    width,
    position: 'fixed',
    zIndex: 1,
    top: 0,
    left: 0,
    backgroundColor: color,
    overflowX: 'hidden',
  },
  container: {
    paddingLeft: width,
  },
});

const Sidebar = ({
  children, content, color, width,
}) => {
  const styles = computeStyle(color, width);
  return (
    <div style={styles.container}>
      <div style={styles.drawer}>{content}</div>
      {children}
    </div>
  );
};

Sidebar.propTypes = {
  children: PropTypes.element.isRequired,
  content: PropTypes.element.isRequired,
  color: PropTypes.string,
  width: PropTypes.string,
};

Sidebar.defaultProps = {
  color: '#efefef',
  width: '160px',
};

export default Sidebar;
