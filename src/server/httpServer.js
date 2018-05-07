/* eslint-disable no-console */
const express = require('express');
const next = require('next');
const open = require('opn');
const http = require('http');
const SocketServer = require('./SocketServer');
const Controller = require('../lib/controllers/Controller');
const ModuleContainer = require('../lib/modules/ModuleContainer');
const SubjectContainer = require('../lib/subject/SubjectContainer');

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
    const nextjs = next({ dev: DEV });
    const handle = nextjs.getRequestHandler();
    const socketServer = new SocketServer(server);
    const moduleContainer = new ModuleContainer();
    const subjectContainer = new SubjectContainer();
    const controller = new Controller(socketServer, moduleContainer, subjectContainer);
    await nextjs.prepare();
    app.get('*', handle);
    controller.start();
    server.listen(port, serverHandler);
  } catch (ex) {
    console.error(ex.stack);
    process.exit(1);
  }
};

module.exports = startServer;
