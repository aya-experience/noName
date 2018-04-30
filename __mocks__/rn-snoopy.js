const snoopy = {
  stream: jest.fn(() => ({
    bufferTime: jest.fn(),
    subscribe: jest.fn(),
  })),
};
export default snoopy;
