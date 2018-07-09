import React from 'react';
import PropTypes from 'prop-types';
import Console from '../../components/Console/index';
import LoggerJSLine from './LoggerJSLine/index';

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

const LoggerJS = (props) => {
  const { data, ...rest } = props;
  return (
    <div style={styles.container}>
      <Console
        style={styles.console}
        data={data}
        ComponentLine={LoggerJSLine}
        {...rest}
      />
    </div>
  );
};

LoggerJS.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default LoggerJS;
