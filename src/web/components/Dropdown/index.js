import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import COLOR from '../../constant';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { open } = this.state;
    const { content, color, children } = this.props;
    const menu = open && (
      <div className="dropdown-menu" id="dropdown-menu4" role="menu">
        <div className="dropdown-content">{content}</div>
      </div>
    );
    const classes = `dropdown${open ? ' is-active' : ''}`;
    return (
      <div className={classes}>
        <div className="dropdown-trigger">
          <Button onClick={this.toggle} color={color}>
            {children}
          </Button>
        </div>
        {menu}
      </div>
    );
  }
}

Dropdown.propTypes = {
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  color: PropTypes.oneOf(COLOR),
};

Dropdown.defaultProps = {
  color: '',
};

export default Dropdown;
