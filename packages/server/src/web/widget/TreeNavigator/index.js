import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import TreeView from '../../components/TreeView/index';
import ViewInfo from '../../components/ViewInfo/index';
import Grid from '@material-ui/core/Grid';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'stretch',
    minHeight: '100%',
    overflowY: 'auto',
  },
  treeView: {
    padding: '10px',
  },
};

class TreeNavigator extends Component {
  constructor(props) {
    super(props);
    this.onSelected = this.onSelected.bind(this);
    this.state = {
      current: null,
    };
  }

  onSelected(item) {
    if (item !== this.state.current) {
      this.setState({ current: item });
    } else {
      this.setState({ current: null });
    }
  }

  render() {
    const { tree } = this.props;
    const { current } = this.state;
    return (
      <Paper style={styles.container}>
        <Grid container direction="row" alignItems="stretch">
          <Grid item sm={8} lg={6} xs={12} style={styles.treeView}>
            <TreeView root={tree} selected={current} onClick={this.onSelected} />
          </Grid>
          {!!current && (
            <Grid item sm={4} lg={6} xs={12}>
              <ViewInfo value={current} />
            </Grid>
          )}
        </Grid>

      </Paper>

    );
  }
}

TreeNavigator.propTypes = {
  tree: PropTypes.shape({ root: PropTypes.object }).isRequired,
};

export default TreeNavigator;
