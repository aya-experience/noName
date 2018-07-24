import React from 'react';
import PropTypes from 'prop-types';
import Console from '../../components/Console/index';
import NetworkLine from './NetworkLine';
import NetworkDetail from './NetworkDetail';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%',
  },
  console: {
    flex: '1 0 0',
  },
};

class Network extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRequest: null,
    };
    this.updateSelected = this.updateSelected.bind(this);
  }

  updateSelected(request) {
    this.setState({ selectedRequest: request });
  }


  render() {
    const { data, ...rest } = this.props;
    const { selectedRequest } = this.state;
    return (
      <div style={styles.container}>
        <Console
          style={styles.console}
          data={data}
          ComponentLine={NetworkLine}
          onClick={this.updateSelected}
          {...rest}
        />
        {selectedRequest && <NetworkDetail request={selectedRequest} />}
      </div>
    );
  }
}

Network.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Network;
