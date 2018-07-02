import React from 'react';
import PropTypes from 'prop-types';
import Console from '../../components/Console/index';
import NetworkLine from './NetworkLine';

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

const Network = (props) => {
  const { data, ...rest } = props;
  return (
    <div style={styles.container}>
      <Console
        style={styles.console}
        data={data}
        ComponentLine={NetworkLine}
        {...rest}
      />
    </div>
  );
};

Network.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Network;
