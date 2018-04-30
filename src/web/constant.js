const COLOR = [
  '',
  'white',
  'black',
  'light',
  'dark',
  'primary',
  'link',
  'info',
  'success',
  'warning',
  'danger',
];

const FILTERS = {
  UIManager: {
    name: 'UIManager',
    handle: data => data.module === 'UIManager',
    color: 'primary',
    activated: false,
  },
  RCTEventEmitter: {
    name: 'RCTEventEmitter',
    handle: data => data.module === 'RCTEventEmitter',
    color: 'warning',
    activated: false,
  },
  UnknownModule: {
    name: 'UnknownModule',
    handle: data => data.handle === false,
    color: 'dark',
    activated: false,
  },
};
export { COLOR as default, FILTERS };
