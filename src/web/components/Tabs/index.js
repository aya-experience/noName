import React from 'react';
import PropTypes from 'prop-types';
import List from '../List';
import Item from '../Item';
import Touchable from '../Touchable';
import sizable from '../../hoc/Size';
/* eslint-disable */
// use of tabs component bulma with a whithout href

class Tabs extends React.Component {
  renderItem = (item, itemIndex) => {
    const { onSelected, index } = this.props;
    return (
      <Item className={index == itemIndex ? 'is-active' : ''}>
        <Touchable value={index} onClick={onSelected}>
          {item}
        </Touchable>
      </Item>
    );
  };

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
