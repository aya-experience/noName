const eventGenerator = () => ({
  bufferTime: jest.fn(eventGenerator),
  subscribe: jest.fn(),
  filter: jest.fn(eventGenerator),
});

const snoopy = {
  stream: jest.fn(eventGenerator),
};
export default snoopy;
