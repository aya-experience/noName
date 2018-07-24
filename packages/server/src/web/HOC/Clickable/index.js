import React from 'react';
import PropTypes from 'prop-types';


const clickable = (Component, onClick) => {
  class ClickableComponent extends React.Component {
    constructor(props) {
      super(props);
      this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler() {
      onClick(this.props.value);
    }


    render() {
      return (
        <div onClick={this.onClickHandler}>
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
