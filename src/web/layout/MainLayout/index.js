import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Container from '../../components/Container';
import Sidebar from '../../components/Sidebar';
import MainMenu from './MainMenu';

const MainLayout = ({ title, children }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" type="text/css" href="/static/css/bulma.min.css" />
      <link rel="stylesheet" type="text/css" href="/static/css/ionicons.min.css" />
    </Head>
    <Sidebar content={<MainMenu />}>
      <Container>{children}</Container>
    </Sidebar>
  </div>
);

MainLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default MainLayout;
