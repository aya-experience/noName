/* eslint-disable class-methods-use-this */
const subscriptionGenerator = () => ({ unsubscribe: jest.fn() });

const observableGenerator = (subscription = subscriptionGenerator()) => {
  const observable = {
    subscribe: jest.fn(() => subscription),
  };
  observable.map = jest.fn(() => observable);
  observable.flatMap = jest.fn(() => observable);
  observable.filter = jest.fn(() => observable);
  observable.let = jest.fn(() => observable);
  observable.do = jest.fn(() => observable);
  return observable;
};


export default class WebConnector {
  static obs = observableGenerator();

  constructor() {
    this.getConsole = jest.fn().mockReturnValue(WebConnector.obs);
    this.getTreeView = jest.fn().mockReturnValue(WebConnector.obs);
  }
}
