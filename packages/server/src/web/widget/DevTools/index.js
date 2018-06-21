import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import WebConnector from 'rn-noname-connector/dist/WebConnector';
import Tabs from '../../components/Tabs/index';
import BridgeConsole from '../../console/BridgeConsole/index';


const styles = {
  container: {
    maxHeight: '250px',
    height: '100%',
    overflowY: 'auto',
  },

  tabs: {
    height: '250px',
  },
};

const defaultMaxSize = 50;


class DevTools extends Component {
  static dataMerger(data, maxSize = defaultMaxSize) {
    return newData => [
      ...newData.reverse(),
      ...data.slice(0, maxSize - newData.length),
    ];
  }

  static noEmpty(data) {
    return data.length > 0;
  }

  constructor(props) {
    super(props);
    this.state = {
      bridgeData: [],
    };
    this.updateData = this.updateData.bind(this);
    this.handleData = this.handleData.bind(this);
  }

  componentDidMount() {
    this.connector = new WebConnector({});
    this.subscription = this.connector
      .getConsole()
      .filter(DevTools.noEmpty)
      .map(this.handleData)
      .subscribe(this.updateData);
  }


  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  getItems() {
    const { bridgeData } = this.state;
    return [
      { value: 'bridge', label: 'Bridge', component: () => <BridgeConsole height="150px" data={bridgeData} /> },
    ];
  }

  handleData(data) {
    return DevTools.dataMerger(this.state.bridgeData, defaultMaxSize)(data);
  }

  updateData(data) {
    this.setState({ bridgeData: data });
  }

  render() {
    return (
      <Paper style={styles.container}>
        <Tabs initial="bridge" style={styles.tabs} items={this.getItems()} />
      </Paper>
    );
  }
}


export default DevTools;

