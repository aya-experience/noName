import filters from './filters';

describe('filters', () => {
  it('should regex filter call match on string with regex given', () => {
    const string = { match: jest.fn().mockReturnValue(true) };
    const regex = 'toto';
    filters.regexFilter(regex)(string);
    expect(string.match).toBeCalledWith(regex);
  });

  it('should regex filter return value of match method', () => {
    const string = { match: jest.fn().mockReturnValue(true) };
    const regex = 'toto';
    expect(filters.regexFilter(regex)(string)).toBeTruthy();
  });

  it('should noSocketUrlFiter return false when socket http url is found', () => {
    const url = 'http://192.168.1.45:3000/socket.io/?EIO=3&transport=polling&t=MF-V7zo&sid=gL9uMcJKBdLy8QtJAAAC';
    expect(filters.socketUrlFilter(url)).toBeTruthy();
  });

  it('should noSocketUrlFiter return false when socket https url is found', () => {
    const url = 'https://192.168.1.45:3000/socket.io/?EIO=3&transport=polling&t=MF-V7zo&sid=gL9uMcJKBdLy8QtJAAAC';
    expect(filters.socketUrlFilter(url)).toBeTruthy();
  });

  it('should noSocketUrlFiter return false when socket https url is found with a domain name', () => {
    const url = 'https://toto/socket.io/?EIO=3&transport=polling&t=MF-V7zo&sid=gL9uMcJKBdLy8QtJAAAC';
    expect(filters.socketUrlFilter(url)).toBeTruthy();
  });

  it('should noSocketUrlFiter return true when no socket url is found', () => {
    const url = 'https://192.168.1.45:3000/i-need-somthing';
    expect(filters.socketUrlFilter(url)).toBeFalsy();
  });
});
