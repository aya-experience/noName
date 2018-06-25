const eventGenerator = () => ({
  bufferTime: jest.fn(eventGenerator),
  pipe: jest.fn().mockReturnThis(),
  subscribe: jest.fn(),
  filter: jest.fn(eventGenerator),
});

const snoopy = {
  stream: jest.fn(eventGenerator),
};
export default snoopy;
