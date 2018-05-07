const Response = require('../../models/Response');
const SubjectType = require('../../enum/SubjectType');
const { Observable } = require('rxjs');

class Controller {
  /**
   * Create a controller instance
   * @param {SocketServerV2} socketServer
   * @param {ModuleContainer} moduleContainer
   */
  constructor(socketServer, moduleContainer, subjectContainer) {
    this.socketServer = socketServer;
    this.moduleContainer = moduleContainer;
    this.subjectContainer = subjectContainer;
    this.handleSource = this.handleSource.bind(this);
    this.handleClient = this.handleClient.bind(this);
  }

  start() {
    // Handle source socket
    this.socketServer
      .connect('/source')
      .subscribe(
        this.handleSource,
        error => console.log(`Source: error - ${error.message}`),
        () => console.log('Source: Stop listenning source'),
      );

    // Handle client socket
    this.socketServer
      .connect('/client')
      .subscribe(
        this.handleClient,
        error => console.log(`Client: error - ${error.message}`),
        () => console.log('Client: kicked'),
      );
  }

  handleSource(socket) {
    console.log('Source: connected');
    socket.disconnect(() => console.log('Source: disconnected'));

    socket
      .on('bridge-data')
      // Split array
      .map(batch => Observable.from(batch))
      // send Observable to middleware
      .let(obs => obs /* middleware handler */) // TODO
      // handle data return response
      .map(data => this.moduleContainer.handle(data))
      .subscribe(response => this.subjectContainer.handle(response));
  }
  /* eslint-disable class-methods-use-this */
  handleClient(socket) {
    console.log(`Client ${socket.id}: connected`);
    let subscriptions = [];
    Object.keys(SubjectType).forEach((key) => {
      const subjectName = SubjectType[key];
      const subject = this.subjectContainer.get(subjectName);

      let subscription = null;

      socket.on(subjectName).subscribe((message) => {
        console.log(`Client ${socket.id}: ${
          message !== 'on' ? 'unsubscribe' : 'subscribe'
        } to ${subjectName}`);
        switch (message) {
          case 'on':
            if (subscription === null) {
              subscription = subject
                .asObservable()
                .subscribe(data => socket.emit(subjectName, data));
              subscriptions = [...subscriptions, subscription];
            }
            break;
          case 'off':
            if (subscription) {
              subscription = subscription.unsubscribe();
            }
            break;
          // maybe one day can handle other command
          default:
            break;
        }
      });
    });

    socket.disconnect().subscribe(() => {
      subscriptions.forEach(subscription => subscription.unsubscribe());
      console.log(`Client ${socket.id}: disconnected`);
    });
  }
}

module.exports = Controller;
