import React, { Component } from 'react';
import Console from '../../components/Console';
import ToolBar from '../../components/ToolBar';
import { FILTERS } from '../../constant';
import WebConnector from '../../../lib/connectors/WebConnector';

const defaultMaxSize = 50;

const dataFilter = filterHandlers => data =>
  data.filter(item => filterHandlers.every(rule => !rule(item)));

const getActivatedFilterHandlers = filters =>
  Object.keys(filters)
    .filter(key => filters[key].activated)
    .map(key => filters[key].handle);

const dataMerger = (data, maxSize = defaultMaxSize) => newData => [
  ...newData,
  ...data.slice(0, maxSize - newData.length),
];

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filters: FILTERS,
    };
    this.connector = new WebConnector({});
  }

  componentDidMount() {
    this.subscription = this.connector
      .getConsole()
      .filter(data => this.filter()(data))
      .map(data => dataMerger(this.state.data)(data))
      .subscribe(data => this.setState({ data }));
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  getFilter = () => {
    const { filters } = this.state;
    const filterHandlers = getActivatedFilterHandlers(filters);
    return dataFilter(filterHandlers);
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
