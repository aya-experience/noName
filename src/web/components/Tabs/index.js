import React from 'react';
import PropTypes from 'prop-types';
import List from '../List';
import Item from '../Item';
import Touchable from '../Touchable';
import sizable from '../../hoc/Size';
import { Div } from 'glamorous';
/* eslint-disable */
// use of tabs component bulma with a whithout href

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: props.initialKey || (props.data[0] && props.data[0].key),
    };
  }

  onClick = key => {
    this.setState({ selectedKey: key });
    this.props.onChange(key);
  };

  renderItem = ({ key, component }) => {
    const { selectedKey } = this.state;
    return (
      <Item key={key} className={selectedKey == key ? 'is-active' : ''}>
        <Touchable value={key} onClick={this.onClick}>
          {key}
        </Touchable>
      </Item>
    );
  };

  render() {
    const { data, className } = this.props;
    const { selectedKey } = this.state;
    const classes = `tabs${className && ` ${className}`}`;
    const currentTab = data.find(item => item.key === selectedKey);
    return (
      <div>
        <nav className={classes}>
          <List data={data} renderItem={this.renderItem} />
        </nav>
        {currentTab && currentTab.component()}
      </div>
    );
  }
}
const itemPropType = PropTypes.shape({ key: PropTypes.string, component: PropTypes.any });

Tabs.propTypes = {
  onChange: PropTypes.func.isRequired,
  initialKey: PropTypes.string,
  data: PropTypes.arrayOf(itemPropType),
  className: PropTypes.string,
};

Tabs.defaultProps = {
  className: '',
  initialKey: '',
};
const SizableTabs = sizable(Tabs);
export { Tabs as TabsBase, SizableTabs as default };
