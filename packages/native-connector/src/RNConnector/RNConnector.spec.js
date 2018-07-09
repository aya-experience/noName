import snoopy from 'rn-snoopy';
import rxjs from 'rxjs';
import RNConnector from './index';
import { activatedModule } from '../constants.json';


describe('RNConnector', () => {
  beforeEach(() => {
    rxjs.clear();
  });

  it('should create a RNConnector with deault value', () => {
    const connector = new RNConnector({});
    expect(connector).toMatchObject({
      eventName: 'bridge-data',
    });
  });

  it('should create a RNConnector with custom event', () => {
    const config = { eventName: 'event-hello' };
    const connector = new RNConnector(config);
    expect(connector).toMatchObject({
      eventName: 'event-hello',
    });
  });

  it('should call snoopy stream when stream is call', () => {
    RNConnector.stream({});
    expect(snoopy.stream).toHaveBeenCalled();
  });

  it('should call emit when onData is call', () => {
    const connector = new RNConnector({});
    const data = 'Hello';
    connector.emit = jest.fn();
    connector.onData(data);
    expect(connector.emit).toBeCalledWith('bridge-data', data);
  });

  it('should return false when a module is not in ActivatedModule', () => {
    expect(RNConnector.onlyActivatedModule({ module: 'RCTEventEmitter' })).toBeFalsy();
  });

  it('should return true when a module is a ActivatedModule', () => {
    expect(RNConnector.onlyActivatedModule({ module: activatedModule[0] })).toBeTruthy();
  });
});
