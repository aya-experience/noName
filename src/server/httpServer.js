/* eslint-disable no-console */
const express = require('express');
const next = require('next');
const open = require('opn');

const DEV = process.env.NODE_ENV !== 'production';

const startServer = async (port) => {
  const SERVER_ADRESS = `http://localhost:${port}`;
  const serverHandler = (err) => {
    if (err) throw err;
    open(SERVER_ADRESS);
    console.log(`> Ready on ${SERVER_ADRESS}`);
  };

  try {
    const server = express();
    const app = next({ dev: DEV });
    const handle = app.getRequestHandler();

    await app.prepare();

    server.get('*', handle);
    server.listen(port, serverHandler);
  } catch (ex) {
    console.error(ex.stack);
    process.exit(1);
  }
};

module.exports = startServer;
