import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import JssProvider from 'react-jss/lib/JssProvider';
import { SheetsRegistry } from 'react-jss/lib/jss';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles';
import AppBar from '../../components/AppBar/index';
import DevTools from '../../widget/DevTools/index';
import Flex from '../Flex/index';

const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: true,
});

const sheetsRegistry = new SheetsRegistry();
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ff833a',
      main: '#e65100',
      dark: '#ac1900',
      contrastText: '#fafafa',
    },
  },
});

const Main = ({ children, title }) => (
  <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
    <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <link rel="stylesheet" href="/static/css/reset.css" />
        <link rel="stylesheet" href="/static/css/googlecode.css" />
        <link rel="stylesheet" href="/static/css/utils.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" key="roboto" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          key="material-icons"
        />
      </Head>
      <Flex
        header={<AppBar title={title} />}
        footer={<DevTools />}
      >
        {children}
      </Flex>
    </MuiThemeProvider>
  </JssProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;
