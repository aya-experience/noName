import React from 'react';
import PropTypes from 'prop-types';


const clickable = (Component, onClick) => {
  class ClickableComponent extends React.Component {
    onClick() {
      onClick(this.props.value);
    }


    render() {
      return (
        <div onClick={this.onClick}>
          <Component {...this.props.value} />
        </div>
      );
    }
  }

  ClickableComponent.propTypes = {
    value: PropTypes.shape({}).isRequired,
  };

  return ClickableComponent;
};


export default clickable;
