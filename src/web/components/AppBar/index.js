import React from 'react';
import PropTypes from 'prop-types';
import AppBarMaterial from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Title from '../Title/index';

const titleStyle = { flex: 1 };

const AppBar = ({ title }) => (
  <AppBarMaterial position="static">
    <Toolbar>
      <Title style={titleStyle} color="textSecondary">{title}</Title>
    </Toolbar>
  </AppBarMaterial>
);

AppBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AppBar;
