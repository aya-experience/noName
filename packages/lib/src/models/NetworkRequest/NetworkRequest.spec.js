import NetworkRequest from './';

describe('NetworkRequest', () => {
  let data;

  beforeEach(() => {
    data = [
      'GET',
      'https://facebook.github.io/react-native/movies.json',
      9,
      [],
      { trackingName: 'unknown' },
      'blob',
      false,
      0,
      true,
    ];
  });

  it('should create a NetworkRequest with some property', () => {
    const request = new NetworkRequest(...data);
    expect(request).toMatchObject({
      method: data[0],
      url: data[1],
      id: data[2],
      headers: data[3],
      data: data[4],
      responseType: data[5],
      useIncrementalUpdates: data[6],
      timeout: data[7],
      withCredentials: data[8],
    });
  });
});
