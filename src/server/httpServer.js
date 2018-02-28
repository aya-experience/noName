/* eslint-disable no-console */
const express = require('express');
const next = require('next');
const open = require('opn');

const DEV = process.env.NODE_ENV !== 'production';
const SERVER_ADRESS = 'http://localhost:3000';

const serverHandler = (err) => {
  if (err) throw err;
  open(SERVER_ADRESS);
  console.log(`> Ready on ${SERVER_ADRESS}`);
};

const startServer = async () => {
  try {
    const server = express();
    const app = next({ dev: DEV });
    const handle = app.getRequestHandler();

    await app.prepare();

    server.get('*', handle);
    server.listen(3000, serverHandler);
  } catch (ex) {
    console.error(ex.stack);
    process.exit(1);
  }
};

startServer();
