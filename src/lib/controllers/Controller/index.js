const { Observable } = require('rxjs/Rx');
const Response = require('../../models/Response/index');
const EmitterType = require('../../enum/EmitterType');

class Controller {
  /**
   * Create a controller instance
   * @param {SocketServer} socketServer
   * @param {ModuleContainer} moduleContainer
   * @param {EmitterContainer} emitterContainer
   * @param {MiddlewareContainer} middlewareContainer
   */
  constructor(socketServer, moduleContainer, emitterContainer, middlewareContainer) {
    this.socketServer = socketServer;
    this.moduleContainer = moduleContainer;
    this.emitterContainer = emitterContainer;
    this.middlewareContainer = middlewareContainer;
    this.handleSource = this.handleSource.bind(this);
    this.handleClient = this.handleClient.bind(this);
    this.moduleMapper = this.moduleMapper.bind(this);
  }

  start() {
    // Handle source socket
    this.socketServer
      // Listen all socket on the namespace /source
      .connect('/source')
      .subscribe(
        this.handleSource,
        Controller.onError('Source'),
        Controller.onComplete('Source'),
      );

    // Handle client socket
    this.socketServer
      // Listen all socket on the namespace /client
      .connect('/client')
      .subscribe(
        this.handleClient,
        Controller.onError('Client'),
        Controller.onComplete('Client'),
      );
  }

  static onError(target) {
    return error => console.log(`${target}: error - ${error.message}`);
  }

  static onComplete(target) {
    return () => console.log(`${target}: Stop listenning source`);
  }

  static onConnect(target, id) {
    console.log(`${target} - ${id}: connected`);
  }

  static onDisconnect(target, id) {
    return () => console.log(`${target} - ${id}: disconnected`);
  }

  moduleMapper(data) {
    try {
      const module = this.moduleContainer.get(data.module);
      return module.handle(data);
    } catch (error) {
      if (error.type === EmitterType.NotFound) {
        return new Response(EmitterType.NotFound, {
          message: error.message,
          /* error, */ data,
        });
      }
      return new Response(EmitterType.Error, { message: error.message, /* error, */ data });
    }
  }

  handleSource(socket) {
    Controller.onConnect('Source', socket.id);
    socket.disconnect().subscribe(Controller.onDisconnect('Source', socket.id));

    socket
      .on('bridge-data')
      // send Observable to middleware
      .let(this.middlewareContainer.handle)
      // handle data return response
      .map(this.moduleMapper)
      // Redirect the response to the target emitter
      .subscribe(this.emitterContainer.handle);
  }

  // listen the channel
  static handleSubscription(socket) {
    return emitter => socket.on(emitter.type).do(Controller.handleMessage(socket, emitter));
  }

  // activate or desactivate emitter subscription
  static handleMessage(socket, emitter) {
    return (message) => {
      switch (message) {
        case 'on':
          console.log(`Client ${socket.id}: subscribe to ${emitter.type}`);
          socket.readEmitter(emitter);
          break;
        case 'off':
          console.log(`Client ${socket.id}: unsubscribe to ${emitter.type}`);
          socket.unreadEmitter(emitter);
          break;
        default:
          console.log(`Client ${socket.id}: Unknow command ${message} on emitter ${emitter.type}`);
          socket.emit(emitter.type, { message: 'Unknow command' });
          break;
      }
    };
  }

  handleClient(socket) {
    Controller.onConnect('Client', socket.id);
    Observable.from(Object.values(EmitterType))
      // Get The Emitter
      .map(this.emitterContainer.get)
      // Get the channel of the emitter
      .flatMap(Controller.handleSubscription(socket))
      .subscribe();

    socket.disconnect().subscribe(Controller.onDisconnect('Client', socket.id));
  }
}

module.exports = Controller;
