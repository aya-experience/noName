import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import JssProvider from 'react-jss/lib/JssProvider';
import { createGenerateClassName } from '@material-ui/core/styles';
import AppBar from '../../components/AppBar/index';
import DevTools from '../../widget/DevTools/index';
import Flex from '../Flex/index';

const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: true,
});

const Main = ({ children, title }) => (
  <JssProvider generateClassName={generateClassName}>
    <div>
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
    </div>
  </JssProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;
