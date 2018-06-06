/* eslint-disable no-console */
const express = require('express');
const next = require('next');
const open = require('opn');
const http = require('http');
const SocketServer = require('./SocketServer/index');
const Controller = require('../lib/controllers/Controller/index');
const ModuleContainer = require('../lib/modules/ModuleContainer/index');
const EmitterContainer = require('../lib/emitters/EmitterContainer/index');
const MiddlewareContainer = require('../lib/middlewares/MiddlewareContainer/index');

const DEV = process.env.NODE_ENV !== 'production';

const startServer = async (port,noPage) => {
  const SERVER_ADRESS = `http://localhost:${port}`;
  const serverHandler = (err) => {
    if (err) throw err;
    if (!noPage) open(SERVER_ADRESS);
    console.log(`> Ready on ${SERVER_ADRESS}`);
  };

  try {
    const app = express();
    const server = http.Server(app);
    const nextjs = next({ dev: DEV });
    const handle = nextjs.getRequestHandler();
    const socketServer = new SocketServer(server);
    const moduleContainer = new ModuleContainer();
    const emitterContainer = new EmitterContainer();
    const middlewareContainer = new MiddlewareContainer(emitterContainer);
    const controller = new Controller(
      socketServer,
      moduleContainer,
      emitterContainer,
      middlewareContainer,
    );
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
