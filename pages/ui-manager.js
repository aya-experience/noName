import React, { Component } from 'react';
import MainLayout from '../src/web/layout/MainLayout/';
import Title from '../src/web/components/Title';
import WebConnector from '../src/lib/connectors/WebConnector';
import TreeView from '../src/web/components/TreeView';

class ConsolePage extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    const connectors = new WebConnector({});
    connectors.on('UIManager').subscribe(data => this.updateUiState(data));
    connectors.on('UIManager').subscribe(data => console.log(data));
  }

  updateUiState(data) {
    this.setState({ data });
  }

  render() {
    return (
      <MainLayout title="No Name">
        <Title>TreeView component</Title>
        {this.state.data && <TreeView root={this.state.data.root} />}
      </MainLayout>
    );
  }
}

export default ConsolePage;
