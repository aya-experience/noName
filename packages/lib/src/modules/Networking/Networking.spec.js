import Networking from './';
import EmitterType from '../../enum/EmitterType.json';

describe('Networking', () => {
  let networking;

  beforeEach(() => {
    networking = new Networking({});
  });

  it('should send request return a response with type ', () => {
    const args = ['GET', 'https://facebook.github.io/react-native/movies.json', 5, [], { trackingName: 'unknown' }, 'blob', false, 0, true];
    expect(networking.sendRequest(args)).toMatchObject({
      type: EmitterType.Network,
      data: expect.any(Object),
    });
  });

  it('should throw an error when clearCookies is call', () => {
    expect(() => {
      networking.clearCookies();
    }).toThrowError();
  });

  it('should throw an error when abortRequest is call', () => {
    expect(() => {
      networking.abortRequest();
    }).toThrowError();
  });
});
