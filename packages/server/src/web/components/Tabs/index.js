import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MaterialTabs from '@material-ui/core/Tabs';
import MaterialTab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
  },
  labelContainer: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  content: {
    flexGrow: 1,
  },
};


class Tabs extends Component {
  constructor(props) {
    super(props);
    this.renderTab = this.renderTab.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      value: props.initial || props.items[0].value || 0,
    };
  }

  onChange(event, value) {
    const { onChange } = this.props;
    if (onChange) {
      onChange(value);
    }
    this.setState({ value });
  }


  renderTab(item, index) {
    const { classes } = this.props;
    return (<MaterialTab
      key={item.value || index}
      value={item.value || index}
      label={item.label}
      icon={item.icon}
      classes={{ root: classes.tabRoot, labelContainer: classes.labelContainer }}
    />);
  }


  render() {
    const {
      items, className, style, classes,
    } = this.props;
    const { value } = this.state;
    const tabs = items.map(this.renderTab);
    const selectedTab = items
      .find((item, index) => (item.value ? item.value === value : index === value));
    return (
      <div style={style} className={classes.container}>
        <MaterialTabs
          classes={{ root: classes.tabsRoot }}
          className={className}
          value={value}
          onChange={this.onChange}
        >
          { tabs }
        </MaterialTabs>
        <div className={classes.content}>
          { selectedTab.component() }
        </div>
      </div>
    );
  }
}

const itemType = PropTypes.shape({
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
  component: PropTypes.func,
});

Tabs.propTypes = {
  items: PropTypes.arrayOf(itemType).isRequired,
  initial: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  classes: PropTypes.shape({}).isRequired,
};

Tabs.defaultProps = {
  initial: '',
  className: '',
  onChange: null,
  style: {},
};
export default withStyles(styles)(Tabs);
