import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Console from '../../components/Console';
import ToolBar from '../../components/ToolBar';
import { FILTERS } from '../../constant';
import WebConnector from '../../../lib/connectors/WebConnector';

const nbItem = 20;

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filters: FILTERS,
    };
  }

  componentDidMount() {
    const connector = new WebConnector({});
    connector.on('console').subscribe(this.onData);
  }

  onData = (data) => {
    const { filters } = this.state;
    const rules = Object.keys(filters)
      .filter(key => filters[key].activated)
      .map(key => filters[key].handle);
    console.log(rules);
    if (rules.length === 0 || !rules.every(rule => !rule(data))) {
      this.setState({ data: [data, ...this.state.data.slice(0, nbItem)] });
    }
  };

  toolbarHandler = (name) => {
    const { filters } = this.state;
    const filter = { ...filters[name] };
    filter.activated = !filter.activated;
    this.setState({ filters: { ...this.state.filters, [name]: filter }, data: [] });
  };

  render() {
    return (
      <div className="is-paddingless">
        <ToolBar data={Object.values(this.state.filters)} onClick={this.toolbarHandler} />
        <Console data={this.state.data} />
      </div>
    );
  }
}


export default index;
