import { stringOrEmpty, spacerIfTrue, joinClass, randomString, generateUniqueId } from './index';

describe('stringOrEmpty', () => {
  it('should return a string', () => {
    expect(stringOrEmpty('toto')).toBe('toto');
  });

  it('should return an empty string if value is null', () => {
    expect(stringOrEmpty(null)).toBe('');
  });

  it('should return an empty string if value is false', () => {
    expect(stringOrEmpty(false)).toBe('');
  });

  it('should return an empty string if value is undefined', () => {
    expect(stringOrEmpty(undefined)).toBe('');
  });

  it('should return an empty string if value is empty', () => {
    expect(stringOrEmpty('')).toBe('');
  });
});

describe('spacerIfTrue', () => {
  it('should return a space', () => {
    expect(spacerIfTrue()('toto', 'toto')).toBe(' ');
  });

  it('should return a -', () => {
    expect(spacerIfTrue('-')('toto', 'toto')).toBe('-');
  });

  it('should not return a space if an element is empty', () => {
    expect(spacerIfTrue()('toto', '')).toBe('');
  });

  it('should not return a space if an element is false', () => {
    expect(spacerIfTrue()('toto', false)).toBe('');
  });

  it('should not return a space if all element is false', () => {
    expect(spacerIfTrue()(null, false)).toBe('');
  });
});

describe('joinClass', () => {
  it('should join class with space', () => {
    expect(joinClass('toto', 'tata', 'titi')).toBe('toto tata titi');
  });

  it('should join class and ignore false item', () => {
    expect(joinClass('toto', false, 'titi')).toBe('toto titi');
  });

  it('should join class and ignore empty item', () => {
    expect(joinClass('toto', '', 'titi')).toBe('toto titi');
  });
});

describe('randomString', () => {
  it('should return a string', () => {
    expect(typeof randomString()).toBe('string');
  });
});

describe('generateUniqueId', () => {
  it('should return a string', () => {
    expect(typeof generateUniqueId()).toBe('string');
  });

  it('should return a string without -', () => {
    expect(generateUniqueId().match(/-/g)).toBeNull();
  });

  it('should return a string with one -', () => {
    expect(generateUniqueId(2).match(/-/g)).toHaveLength(1);
  });

  it('should return a string with (n-1) -', () => {
    expect(generateUniqueId(100).match(/-/g)).toHaveLength(99);
  });
});
