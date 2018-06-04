import Response from './index';

describe('Response', () => {
  it('should create an object with type and data property', () => {
    const response = new Response('TreeView', 'data');
    expect(response).toEqual({ type: 'TreeView', data: 'data' });
  });
});
