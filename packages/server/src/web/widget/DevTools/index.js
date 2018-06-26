import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import WebConnector from '@rn-debugger/connector/dist/WebConnector';
import Tabs from '../../components/Tabs/index';
import BridgeConsole from '../../console/BridgeConsole/index';
import LoggerJS from '../../console/LoggerJS';


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
      loggerJSData: [],
    };
    this.updateData = this.updateData.bind(this);
    this.handleData = this.handleData.bind(this);
  }

  componentDidMount() {
    this.connector = new WebConnector({});
    this.subscription = this.connector
      .getLogger()
      .filter(DevTools.noEmpty)
      .map(this.handleData('bridgeData'))
      .subscribe(this.updateData('bridgeData'));
    this.subscription = this.connector
      .getLoggerJS()
      .filter(DevTools.noEmpty)
      .map(this.handleData('loggerJSData'))
      .subscribe(this.updateData('loggerJSData'));
  }


  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  getItems() {
    const { bridgeData, loggerJSData } = this.state;
    return [
      {
        value: 'bridge',
        label: 'Bridge',
        component: () => <BridgeConsole height="150px" data={bridgeData} />,
      }, {
        value: 'js',
        label: 'JS',
        component: () => <LoggerJS height="150px" data={loggerJSData} />,
      },
    ];
  }

  handleData(type) {
    return data => DevTools.dataMerger(this.state[type], defaultMaxSize)(data);
  }

  updateData(type) {
    return data => this.setState({ [type]: data });
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

