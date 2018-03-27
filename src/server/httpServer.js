/* eslint-disable no-console */
const express = require('express');
const next = require('next');
const open = require('opn');
const http = require('http');
const socketServer = require('./SocketServer');

const DEV = process.env.NODE_ENV !== 'production';

const startServer = async (port) => {
  const SERVER_ADRESS = `http://localhost:${port}`;
  const serverHandler = (err) => {
    if (err) throw err;
    open(SERVER_ADRESS);
    console.log(`> Ready on ${SERVER_ADRESS}`);
  };

  try {
    const app = express();
    const server = http.Server(app);
    socketServer(server);
    const nextjs = next({ dev: DEV });
    const handle = nextjs.getRequestHandler();
    await nextjs.prepare();
    app.get('*', handle);
    server.listen(port, serverHandler);
  } catch (ex) {
    console.error(ex.stack);
    process.exit(1);
  }
};

module.exports = startServer;
