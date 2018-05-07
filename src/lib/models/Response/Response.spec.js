import Response from './';

describe('Response', () => {
  it('should create an object with type and data property', () => {
    const response = new Response('ViewState', 'data');
    expect(response).toEqual({ type: 'ViewState', data: 'data' });
  });
});
