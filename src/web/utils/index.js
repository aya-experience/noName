export const stringOrEmpty = value => (value || '');
export const spacerIfTrue = (symbol = ' ') => (...values) => (values.every(value => !!value) ? symbol : '');
export const joinClass = (...values) => values.reduce((acc, value) => acc + spacerIfTrue()(acc, value) + stringOrEmpty(value), '');
export const randomString = () => Math.random().toString(36).substring(2, 15);
export const generateUniqueId = (size = 1) => [...Array(size)].reduce(acc => acc + spacerIfTrue('-')(acc) + randomString(), '');
