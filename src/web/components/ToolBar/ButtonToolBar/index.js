import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';
import Icon from '../../Icon';
import Text from '../../Text';
import COLOR from '../../../constant';

class ButtonToolBar extends Component {
  onClickHandler = () => {
    const { onClick, name } = this.props;
    onClick(name);
  };

  render() {
    const {
      icon, name, activated, color, className,
    } = this.props;
    const activeColor = color || 'info';
    return (
      <p className="control">
        <Button
          size="small"
          color={activated ? activeColor : ''}
          className={className}
          onClick={this.onClickHandler}
        >
          {icon && <Icon name={icon} />}
          <Text>{name}</Text>
        </Button>
      </p>
    );
  }
}

ButtonToolBar.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string,
  color: PropTypes.oneOf(COLOR),
  className: PropTypes.string,
  activated: PropTypes.bool,
};

ButtonToolBar.defaultProps = {
  icon: '',
  color: 'info',
  className: '',
  activated: false,
};

export default ButtonToolBar;
