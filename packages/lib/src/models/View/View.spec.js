import View from './index';

describe('ViewContainer', () => {
  let view;
  let child;

  beforeEach(() => {
    view = new View(1, 'RTCView', { backgroundColor: 'JaunePika' });
    child = new View(2, 'RTCText');
    view.setChildren([child]);
  });

  it('should have an id, an name and some properties', () => {
    expect(view).toMatchObject({
      id: 1,
      className: 'RTCView',
      props: { backgroundColor: 'JaunePika' },
    });
  });

  it('should have a child', () => {
    expect(view.children).toHaveLength(1);
  });

  it('should have a parent', () => {
    expect(child.parentId).toBe(view.id);
  });

  it('should remove children', () => {
    view.removeChildAt(0);
    expect(view.children.length).toBe(0);
  });

  it('should remove parent ', () => {
    view.removeChildAt(0);
    expect(child.parentId).toBeNull();
  });

  it('should remove parent ', () => {
    view.removeChildAt(0);
    expect(child.parentId).toBeNull();
  });

  it('should ad child at index position', () => {
    const index = 1;
    const newChild = new View(3, 'RTCText', {});
    view.addChildAt(newChild, index);
    expect(view.children[index]).toBe(newChild);
  });

  it('should have an id, an name and some properties', () => {
    const props = { border: '1px solid black' };
    view.setProps(props);
    expect(view).toHaveProperty('props', props);
  });

  it('should have an id, an name and some properties', () => {
    const className = 'RTCList';
    view.setClassName(className);
    expect(view).toHaveProperty('className', className);
  });

  it('should return a child at index 0', () => {
    expect(view.getChildAt(0)).toBe(child);
  });

  it('should set the mesure of name hello with value 10', () => {
    view.addMeasures('hello', 10);
    expect(view.measures.hello).toBe(10);
  });

  it('should add a command call', () => {
    view.addCommandCall(10, [45, 65]);
    expect(view.commandCalls).toHaveLength(1);
  });
});
