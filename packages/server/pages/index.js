import React, { Component } from 'react';
import WebConnector from 'rn-noname-connector/dist/WebConnector';
import Main from '../src/web/layout/Main';
import TreeNavigator from '../src/web/widget/TreeNavigator';
import withRoot from '../src/web/material-utils/withRoot';


class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tree: null,
    };
    this.updateTreeView = this.updateTreeView.bind(this);
  }

  componentDidMount() {
    const connector = new WebConnector({});
    this.subscription = connector.getTreeView().subscribe(this.updateTreeView);
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  updateTreeView(tree) {
    this.setState({ tree });
  }

  render() {
    const { tree } = this.state;
    return (
      <Main title="TreeView">
        {tree ? <TreeNavigator tree={tree.root} /> : <p>No devices connected</p>}
      </Main>
    );
  }
}
export default index;
