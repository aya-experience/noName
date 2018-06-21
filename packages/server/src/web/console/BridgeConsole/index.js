import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Console from '../../components/Console/index';
import BridgeLine from './BridgeLine/index';
import BridgeFilterForm from './BridgeFilterForm/index';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  console: {
    flex: '1 0 0',
  },
};

class BridgeConsole extends Component {
  constructor(props) {
    super(props);
    this.filterChange = this.filterChange.bind(this);
    this.filter = this.filter.bind(this);
    this.state = {
      filters: {
        module: '',
        method: '',
      },
    };
  }

  filterChange(value) {
    this.setState({ filters: { ...this.state.filters, ...value } });
  }

  filter(line) {
    const { module, method } = this.state.filters;
    return line.module.includes(module) && line.method.includes(method);
  }

  render() {
    const { data, ...rest } = this.props;
    const { module, method } = this.state.filters;
    return (
      <div style={styles.container}>
        <BridgeFilterForm module={module} method={method} onChange={this.filterChange} />
        <div style={styles.console}>
          <Console data={data.filter(this.filter)} ComponentLine={BridgeLine} {...rest}/>
        </div>
      </div>
    );
  }
}

BridgeConsole.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default BridgeConsole;
