import React from 'react';
import PropTypes from 'prop-types';
import connect from '../../hoc/Color';

const Notification = ({ children, className, onClose }) => {
  const classes = `notification${className && ` ${className}`}`;

  const closeButton = onClose && <button className="delete" onClick={onClose} />;
  return (
    <div className={classes}>
      {closeButton}
      {children}
    </div>
  );
};

Notification.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClose: PropTypes.func,
};

Notification.defaultProps = {
  className: '',
  onClose: null,
};

export default connect(Notification);
