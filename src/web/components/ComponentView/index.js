import React, { Component, Fragment } from 'react';
import { Minus, Plus } from 'mdi-material-ui';
import PropTypes from 'prop-types';
import XmlHighlight from '../XmlHighlight/index';
import Touchable from '../Touchable/index';

const styles = {
  container: {
    position: 'relative',
    paddingLeft: '14px',
  },
  icon: {
    color: '#008',
    position: 'absolute',
    fontSize: '16px',
    top: '2px',
    left: '0px',
  },
};


/* eslint-disable react/forbid-prop-types */
class ComponentView extends Component {
  constructor(props) {
    super(props);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.ifFunction = this.ifFunction.bind(this);
    this.inlineView = this.inlineView.bind(this);
    this.childrenView = this.childrenView.bind(this);
    this.state = {
      open: false,
    };
  }

  getIcon() {
    return this.state.open ?
      <Minus style={styles.icon} onClick={this.close} /> :
      <Plus style={styles.icon} onClick={this.open} />;
  }

  open() {
    this.setState({ open: true });
  }

  close() {
    this.setState({ open: false });
  }


  ifFunction(func, value) {
    return func ? <Touchable onClick={func} value={this.props.value} >{value}</Touchable> : value;
  }

  inlineView(selectedClass, onClick, { className, id }) {
    const openTag = <XmlHighlight className={selectedClass} onClick={onClick}>{`<${className} id="${id}"/>`}</XmlHighlight>;
    return this.ifFunction(onClick, openTag);
  }

  childrenView(selectedClass, onClick, { className, id }, children) {
    const openTag = <XmlHighlight className={selectedClass} onClick={onClick}>{`<${className} id="${id}">`}</XmlHighlight>;
    const closeTag = <XmlHighlight className={selectedClass} onClick={onClick}>{`</${className}>`}</XmlHighlight>;
    return (
      <Fragment>
        {this.ifFunction(onClick, openTag)}
        <div>{children}</div>
        {this.ifFunction(onClick, closeTag)}
      </Fragment>
    );
  }

  render() {
    const {
      value, children, onClick, selected,
    } = this.props;
    const { open } = this.state;
    const hasChildren = React.isValidElement(children)
      || (Array.isArray(children) && !!children.length);
    const icon = hasChildren ? this.getIcon() : null;
    const selectedClass = selected ? 'selected' : '';
    const renderFunc = hasChildren && open ? this.childrenView : this.inlineView;
    return (
      <div style={styles.container}>
        {icon}
        {renderFunc(selectedClass, onClick, value, children)}
      </div>
    );
  }
}

ComponentView.propTypes = {
  selected: PropTypes.bool,
  value: PropTypes.shape({}).isRequired,
  children: PropTypes.any,
  onClick: PropTypes.func,
};

ComponentView.defaultProps = {
  children: [],
  onClick: null,
  selected: false,
};

export default ComponentView;
