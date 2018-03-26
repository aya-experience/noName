import React from 'react';
import PropTypes from 'prop-types';
import List from '../List';
import Item from '../Item';
import sizable from '../../hoc/Size';
/* eslint-disable */
// use of tabs component bulma with a whithout href

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.renderItem = (item, index) => (
      <Item className={this.props.index == index ? 'is-active' : ''}>
        <a onClick={() => this.props.onSelected(index)}>{item}</a>
      </Item>
    );
  }

  render() {
    const { data, className } = this.props;
    const classes = `tabs${className && ` ${className}`}`;
    return (
      <nav className={classes}>
        <List data={data} renderItem={this.renderItem} />
      </nav>
    );
  }
}

Tabs.propTypes = {
  onSelected: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.element, PropTypes.string])),
  className: PropTypes.string,
};

Tabs.defaultProps = {
  className: '',
};
const SizableTabs = sizable(Tabs);
export { Tabs as TabsBase, SizableTabs as default };
