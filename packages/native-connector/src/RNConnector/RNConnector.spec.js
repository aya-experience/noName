import snoopy from 'rn-snoopy';
import RNConnector from './index';
import { activatedModule } from '../constants.json';


/*jest.mock('rn-snoopy');*/

describe('RNConnector', () => {
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
    expect(RNConnector.onlyActivatedModule({ module: 'AbsolutelyUnknownModule' })).toBeFalsy();
  });

  it('should return true when a module is a ActivatedModule', () => {
    expect(RNConnector.onlyActivatedModule({ module: activatedModule[0] })).toBeTruthy();
  });

  it('should filter on the observable passed to filter method', () => {
    const obs = { filter: jest.fn(() => obs) };
    RNConnector.filter(obs);
    expect(obs.filter).toBeCalledWith(RNConnector.onlyActivatedModule);
  });

  it('should filter return an obs', () => {
    const obs = { filter: jest.fn(() => obs) };
    expect(RNConnector.filter(obs)).toBe(obs);
  });
});
