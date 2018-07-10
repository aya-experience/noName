export default jest.fn(() => ({
  emit: jest.fn(),
  on: jest.fn(),
}));
