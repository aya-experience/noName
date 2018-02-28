import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Container from '../../components/Container/Container';

const Layout = ({ title, children }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" type="text/css" href="/static/bulma.min.css" />
    </Head>
    <Container>{children}</Container>
  </div>
);

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Layout;
